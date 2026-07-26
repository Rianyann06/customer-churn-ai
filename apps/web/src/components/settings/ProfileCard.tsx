import { useEffect, useState } from "react";
import {
    Briefcase,
    Mail,
    MapPin,
} from "lucide-react";

import {
    SiReact,
    SiTypescript,
    SiFastapi,
    SiSqlite,
    SiScikitlearn,
} from "react-icons/si";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
}
    from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import EditProfileDialog from "./EditProfileDialog";

import type { UserProfile } from "@/types/profile";
import {
    getProfile,
    saveProfile,
} from "@/lib/profile-storage";

export default function ProfileCard() {
    const [profile, setProfile] = useState<UserProfile>(getProfile());

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setProfile(getProfile());
    }, []);

    function handleSave(updatedProfile: UserProfile) {
        saveProfile(updatedProfile);
        setProfile(updatedProfile);
    }

    const initials = profile.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <>
            <Card className="border-border/60 shadow-sm">
                <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24">
                            <AvatarImage
                                src={profile.avatar || undefined}
                                alt={profile.name}
                            />

                            <AvatarFallback className="text-2xl font-bold">
                                {initials}
                            </AvatarFallback>
                        </Avatar>

                        <h3 className="mt-4 text-xl font-semibold">
                            {profile.name}
                        </h3>

                        <p className="text-muted-foreground">
                            {profile.role}
                        </p>

                        <div className="mt-6 w-full space-y-4">

                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-sm">
                                    {profile.email}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-sm">
                                    {profile.location}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Briefcase className="h-4 w-4 text-primary" />
                                <span className="text-sm">
                                    Customer Churn AI Platform
                                </span>
                            </div>

                        </div>

                        <div className="mt-8">
                            <h4 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Technology Stack
                            </h4>

                            <div className="space-y-3">

                                {/* Baris 1 */}
                                <div className="flex justify-center gap-3">

                                    <div className="flex w-37 items-center justify-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500/5">
                                        <SiReact className="text-lg text-sky-500" />
                                        <span className="font-medium">React</span>
                                    </div>

                                    <div className="flex w-37 items-center justify-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5">
                                        <SiTypescript className="text-lg text-blue-600" />
                                        <span className="font-medium">TypeScript</span>
                                    </div>

                                </div>

                                {/* Baris 2 */}
                                <div className="flex justify-center gap-3">

                                    <div className="flex w-37 items-center justify-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-emerald-500/5">
                                        <SiFastapi className="text-lg text-emerald-500" />
                                        <span className="font-medium">FastAPI</span>
                                    </div>

                                    <div className="flex w-37 items-center justify-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/5">
                                        <SiSqlite className="text-lg text-indigo-500" />
                                        <span className="font-medium">SQLite</span>
                                    </div>

                                    <div className="flex w-37 items-center justify-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/5">
                                        <SiScikitlearn className="text-lg text-orange-500" />
                                        <span className="font-medium">Scikit-Learn</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <Button
                            className="mt-8 w-full"
                            onClick={() => setOpen(true)}
                        >
                            Edit Profile
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <EditProfileDialog
                open={open}
                onOpenChange={setOpen}
                profile={profile}
                onSave={handleSave}
            />
        </>
    );
}