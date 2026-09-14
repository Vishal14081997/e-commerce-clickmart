import React, { useEffect, useState } from "react";
import axios from "axios";
import { Mail, Phone, User, ShieldCheck, ShieldAlert } from "lucide-react";
import toast from "react-hot-toast";


const Profile = () => {
    const token = localStorage.getItem("token")
    const [data, setData] = useState("")

    const fetchProfile = async () => {
        try {
            const response = await axios.get("http://localhost:3000/admin/get-profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data);
            setData(response.data.data)
        } catch (error) {
            console.log(error.response.data.message);

        }
    }
    useEffect(() => {
        fetchProfile()
    }, [])
    return (
        <div className="min-h-[80vh] w-full bg-white p-6">
            <div className="mx-auto max-w-xl">
                {/* Card */}
                <div className="rounded-2xl border border-gray-200 bg-white">

                    {/* Top: avatar + name */}
                    <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-6">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100">

                            <img
                                src={data.image_url || null}
                                alt="Profile"
                                className="h-full w-full object-cover "
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-lg font-semibold text-gray-900">
                                {data.full_name}
                            </p>
                            <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                                {data.userType}
                            </span>
                        </div>
                    </div>

                    {/* Info rows */}
                    <div className="divide-y divide-gray-100 px-6">
                        <div className="flex items-center gap-3 py-4">
                            <Mail size={17} className="text-gray-400" />
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500">Email</p>
                                <p className="truncate text-sm font-medium text-gray-900">
                                    {data.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 py-4">
                            <Phone size={17} className="text-gray-400" />
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500">Phone Number</p>
                                <p className="text-sm font-medium text-gray-900">
                                    {data.phone_no}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 py-4">
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500">Account Status</p>

                                <p
                                    className={`text-sm font-medium `}
                                >
                                    {data.status}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;