import { useState } from "react"
import { Pencil, Loader2 } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../features/user/userSlice"
import { useAuth, useUser } from "@clerk/react"
import toast from "react-hot-toast"

function ProfileModal({setShowEdit}) {
    const dispatch = useDispatch()
    const { getToken } = useAuth()
    const user = useSelector((state) => state.user.value)
    const [loading, setLoading] = useState(false) // 1. Added loading state
    const { user: clerkUser } = useUser()
    const [editForm, setEditForm] = useState({
        username: user.username,
        bio: user.bio,
        location: user.location,
        profile_picture: null,
        cover_photo: null,
        full_name: user.full_name,
    })

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        setLoading(true); // 2. Enable loading state
        try {
            const userData = new FormData()
            const { full_name, username, bio, location, profile_picture, cover_photo } = editForm
            userData.append('username', username)
            userData.append('bio', bio)
            userData.append('location', location)
            userData.append('full_name', full_name)
            profile_picture && userData.append('profile', profile_picture)
            cover_photo && userData.append('cover', cover_photo)
            
            const token = await getToken();
            const resultAction = await dispatch(updateUser({ userData, token })).unwrap();
            if (resultAction) {
                if (profile_picture && clerkUser) {
                    await clerkUser.setProfileImage({ file: profile_picture });
                    await clerkUser.reload(); // Refresh Clerk cache
                }
                setShowEdit(false); // 4. Only close modal on success
            }
        } catch (error) {
            toast.error(error.message || "Failed to update profile");
        } finally {
            setLoading(false); // 5. Turn off loading state regardless of outcome
        }
    }

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50'>
            <div className='max-w-2xl sm:py-6 mx-auto'>
                <div className='bg-white rounded-lg shadow p-6'>
                    <h1 className='text-2xl font-bold text-gray-900 mb-6'>Edit Profile</h1>

                    <form className='space-y-4' onSubmit={handleSaveProfile}>
                        {/* Profile Picture */}
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="profile_picture" className='block text-sm font-medium text-gray-700 mb-1 cursor-pointer'>
                                Profile Picture
                                <input hidden type="file" accept="image/*" id="profile_picture"
                                onChange={(e)=>setEditForm({...editForm, profile_picture: e.target.files[0]})} />
                                <div className='group/profile relative'>
                                    <img src={editForm.profile_picture ? URL.createObjectURL(editForm.profile_picture) : user.profile_picture}
                                    alt="" className='w-24 h-24 rounded-full object-cover mt-2'/>
                                    <div className='absolute hidden group-hover/profile:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-full items-center justify-center'>
                                        <Pencil className="w-5 h-5 text-white"/>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {/* Cover Photo */}
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700 mb-1 cursor-pointer">
                                Cover Photo
                                <input hidden type="file" accept="image/*" id="cover_photo"
                                onChange={(e)=>setEditForm({...editForm, cover_photo: e.target.files[0]})} />
                                <div className="group/cover relative">
                                    <img src={editForm.cover_photo ? URL.createObjectURL(editForm.cover_photo) : user.cover_photo} alt=""
                                        className='w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2' />
                                    <div className='absolute hidden group-hover/cover:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg items-center justify-center'>
                                        <Pencil className="w-5 h-5 text-white"/>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" className='w-full p-3 border border-gray-200 rounded-lg' onChange={(e) => setEditForm({...editForm, full_name: e.target.value})} value={editForm.full_name}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input type="text" className='w-full p-3 border border-gray-200 rounded-lg' onChange={(e) => setEditForm({...editForm, username: e.target.value})} value={editForm.username}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                            <textarea rows={3} className='w-full p-3 border border-gray-200 rounded-lg' onChange={(e) => setEditForm({...editForm, bio: e.target.value})} value={editForm.bio}/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input type="text" className='w-full p-3 border border-gray-200 rounded-lg' onChange={(e) => setEditForm({...editForm, location: e.target.value})} value={editForm.location}/>
                        </div>

                        <div className='flex justify-end space-x-3 pt-6'>
                            <button onClick={() => setShowEdit(false)} type='button' disabled={loading}
                            className='px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50'>Cancel</button>

                            <button type='submit' disabled={loading} className='px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer flex items-center gap-2 disabled:opacity-50'>
                                {loading && <Loader2 className="w-4 h-4 animate-spin"/>}
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal