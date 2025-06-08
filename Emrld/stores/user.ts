import { defineStore } from 'pinia'

interface UserProfile {
  id: number
  name: string
  profilePicture: string
  location: string
  bio: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: 1,
      name: 'Kareem Allaf',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'Riyadh',
      bio: 'Mobile enthusiast'
    } as UserProfile,
    likedAds: [1] as number[],
    postedAds: [1] as number[]
  }),
  actions: {
    updateProfile(profile: Partial<UserProfile>) {
      this.user = { ...this.user, ...profile }
    },
    toggleLike(adId: number) {
      if (this.likedAds.includes(adId)) {
        this.likedAds = this.likedAds.filter((id: number) => id !== adId)
      } else {
        this.likedAds.push(adId)
      }
    }
  }
}) 