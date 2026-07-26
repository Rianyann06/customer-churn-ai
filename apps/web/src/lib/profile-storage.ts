export interface UserProfile {
    name: string;
    role: string;
    email: string;
    location: string;
    avatar?: string;
}

const STORAGE_KEY = "user-profile";

const DEFAULT_PROFILE: UserProfile = {
    name: "Muhammad Fakhrul",
    role: "Data Scientist",
    email: "email@example.com",
    location: "Indonesia",
    avatar: "",
};

export function getProfile(): UserProfile {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return DEFAULT_PROFILE;
    }

    try {
        return JSON.parse(data) as UserProfile;
    } catch {
        return DEFAULT_PROFILE;
    }
}

export function saveProfile(profile: UserProfile): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));

    window.dispatchEvent(new Event("profile-updated"));
}