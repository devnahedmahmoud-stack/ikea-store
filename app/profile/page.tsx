"use client";

import BannerSection from "@/components/banner/BannerSection";
import ProfileLinksSection from "@/components/user/ProfileLinksSection";
import ProfileUserName from "@/components/user/ProfileUserName";

const ProfilePage = () => {
  return (
    <main>
      <section className="py-20 xl:px-30 lg:px-12 px-6 flex flex-col gap-6">
        <ProfileUserName/>
        <div className="flex lg:flex-row flex-col lg:gap-15 gap-6">
        <BannerSection />
        <ProfileLinksSection />
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
