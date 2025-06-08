import { defineStore } from 'pinia'

interface Poster {
  id: number
  name: string
  profilePicture: string
  location: string
  bio: string
  phone: string
}

interface Ad {
  id: number
  title: string
  description: string
  image: string
  category: string
  isFeatured: boolean
  isSpecial: boolean
  location: string
  postedBy: number
  poster: Poster
  price: string
}

export const useAdsStore = defineStore('ads', {
  state: () => ({
    ads: [
      {
        id: 1,
        title: 'iPhone 14 Pro Max',
        description: 'Brand new, never used. 256GB, Space Black. This is a longer description to test scrolling. It has many details about the phone, its condition, features, and why its a great buy. We are looking for serious buyers only. Please contact us for more information. The phone comes with original box and accessories. No scratches, no dents, perfect condition. Battery health is 99%. Unlocked and ready for any carrier.',
        image: 'https://via.placeholder.com/600x400?text=iPhone+14+Pro+Max',
        category: 'Electronics',
        isFeatured: true,
        isSpecial: false,
        location: 'Riyadh',
        postedBy: 1,
        poster: {
          id: 1,
          name: 'Kareem Allaf',
          profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
          location: 'Riyadh',
          bio: 'Mobile enthusiast',
          phone: '0551234567'
        },
        price: 'SAR 3,999'
      },
      {
        id: 2,
        title: 'Toyota Camry 2022',
        description: 'Excellent condition, low mileage. Full options, regularly serviced at dealership. Perfect family car. This is a longer description to test scrolling. It has many details about the car, its condition, features, and why its a great buy. We are looking for serious buyers only. Please contact us for more information. The car has no accidents, new tires, and extended warranty. Inspection report available upon request.',
        image: 'https://via.placeholder.com/600x400?text=Toyota+Camry+2022',
        category: 'Cars',
        isFeatured: false,
        isSpecial: true,
        location: 'Jeddah',
        postedBy: 2,
        poster: {
          id: 2,
          name: 'Sara Ahmed',
          profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
          location: 'Jeddah',
          bio: 'Car dealer',
          phone: '0509876543'
        },
        price: 'SAR 85,000'
      }
    ] as Ad[],
    categories: ['all', 'Electronics', 'Cars', 'Real Estate', 'Jobs', 'Services', 'Other'],
    defaultPoster: {
      id: 1,
      name: 'Kareem Allaf',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'Riyadh',
      bio: 'Mobile enthusiast',
      phone: '0551234567'
    } as Poster
  }),
  actions: {
    addAd(ad: Ad) {
      this.ads.unshift(ad)
    }
  }
}) 