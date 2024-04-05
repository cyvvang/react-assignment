# react-assignment
Link:
https://react-assignment-three-black.vercel.app/

Instructions to locally run application: 
1. Open the terminal in VSCode
2. npm install
3. npm start

Known Bugs: Filter Combinations :/
- Favorites button on the left sidebar is a toggle (must be clicked once to see favorited songs, must be clicked TWICE to remove favorited filter). Unless user clicks the Home button, filters created from the clicking on the artist icons will be applied to the favorited songs.
- If user favorites a song from the home/landing page, clicks on an artist whose song was not favorited, and clicks on the Favorites button, no songs will appear because the app is trying to find favorited songs by the artist the user just selected. However, if the user clicks the Home button and then clicks the Favorites button, they will see their original favorited song/s.
- Year and Song Type filters can be applied to the selection of songs, but multiple years and/or multiple song types cannot be selected together. (Note: these filters can also be toggled on and off)
- (The safest way to ensure all the filters are working properly in some manner is to click the Home button in between to "reset" everything.)
