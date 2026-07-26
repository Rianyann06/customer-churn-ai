
import AppearanceCard from "@/components/settings/AppearanceCard";
import ModelConfigurationCard from "@/components/settings/ModelConfigurationCard";
import ProfileCard from "@/components/settings/ProfileCard";
import SettingsHero from "@/components/settings/SettingsHero";
import SettingsSection from "@/components/settings/SettingsSection";

export default function Settings() {
    return (
        <div className="space-y-8">
            <SettingsHero />

            <div className="grid gap-8 lg:grid-cols-2">
                <SettingsSection
                    title="Profile"
                    description="Manage your personal information."
                >
                    <ProfileCard />
                </SettingsSection>

                <SettingsSection
                    title="AI Model"
                    description="Current machine learning model configuration."
                >
                    <ModelConfigurationCard />
                </SettingsSection>
            </div>

            <div className="grid gap-6">
                <AppearanceCard />
            </div>
        </div>
    );
}