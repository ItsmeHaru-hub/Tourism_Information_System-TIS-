# Images Folder

This folder contains all the tourism attraction images for the offline demo. The system automatically maps these images to specific attractions.

## Current Images Used:

1. **Mount Pongkay.jpg** - Mag-Inde Peak (Mountain)
2. **Cabadbaran River.jpg** - Agusan River (Nature/Water)
3. **Cabadbaran City.jpg** - Cabadbaran City Proper (Cultural/City)
4. **hilong-hilong.jpg** - Rainforest Canopy Walk (Nature/Forest)
5. **Lusong Cold Spring.jpg** - Hot Springs Resort (Wellness/Water)
6. **Atega Park.jpg** - Indigenous Village Tour (Cultural)
7. **River Tugnaw.jpg** - Waterfalls Trail (Nature/Waterfall)
8. **Sabang Dike.jpg** - Botanical Garden (Plants/Nature)

## Additional Images Available:

- Cabadbaran City Hall.jpg
- Cabadbaran City Plaza.jpg
- Tumipi Cold Spring.webp

## How It Works:

- Images are displayed in the featured section on the Home page
- Images appear in destination cards in the Explore page
- Full-size images show up in the detail modal when clicking on a destination

## To Replace or Add Images:

1. Add or replace images in this folder
2. Update the `image` property in the destinations array in `app.js`
3. Use the format: `"image": "images/filename.jpg"`
4. The system supports JPG, PNG, and WebP formats

## Fallback:

If an image fails to load, the system will automatically display emoji placeholders for that attraction.

