import React, { useEffect, useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { UserProfile } from "@/types/profile";

interface EditProfileDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    profile: UserProfile;
    onSave: (profile: UserProfile) => void;
}

export default function EditProfileDialog({
    open,
    onOpenChange,
    profile,
    onSave,
}: EditProfileDialogProps) {
    const [form, setForm] = useState(profile);
    function handleAvatarChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = e.target.files?.[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            setForm((prev) => ({
                ...prev,
                avatar: reader.result as string,
            }));
        };

        reader.readAsDataURL(file);
    }

    useEffect(() => {
        setForm(profile);
    }, [profile]);

    function handleChange(
        field: keyof UserProfile,
        value: string
    ) {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    function handleSave() {
        onSave(form);
        onOpenChange(false);
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>

                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>

                    <DialogDescription>
                        Update your personal information.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5">
                    <div className="flex flex-col items-center gap-4">

                        <Avatar className="h-24 w-24">

                            <AvatarImage src={form.avatar} />

                            <AvatarFallback>
                                {form.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")
                                    .slice(0, 2)
                                    .toUpperCase()}
                            </AvatarFallback>

                        </Avatar>

                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                        />

                    </div>
                    <div className="space-y-2">
                        <Label>Name</Label>

                        <Input
                            value={form.name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Role</Label>

                        <Input
                            value={form.role}
                            onChange={(e) =>
                                handleChange("role", e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Email</Label>

                        <Input
                            value={form.email}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Location</Label>

                        <Input
                            value={form.location}
                            onChange={(e) =>
                                handleChange("location", e.target.value)
                            }
                        />
                    </div>

                </div>

                <DialogFooter>

                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button onClick={handleSave}>
                        Save Changes
                    </Button>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}