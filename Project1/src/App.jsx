import "./App.css";
import CardList from "./components/CardList";

const App = () => {
  const sunsets = [
    {
      title: "Lake Hefner - Oklahoma City",
      description: "the lighthouse at lake hefner",
      link: "https://maps.app.goo.gl/rs5nYbh5csqnMHZo6",
      image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/sunset-at-the-lake-hefner-lighthouse-okc-east-wharf-gregory-ballos.jpg",
    },
    {
      title: "Scissortail Park - Oklahoma City",
      description: "the scissortail park at downtown okc",
      link: "https://maps.app.goo.gl/GeZUfYbvrSj8vEfq6",
      image:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/skyline-oklahoma-city-at-sunset-from-scissortail-park-southern-plains-photography.jpg",
    },
    {
      title: "Quartz Mountain State Park – Lone Wolf",
      description:
        "Catch a spectacular sunset year round surrounded by nature in southwest Oklahoma",
      link: "https://maps.app.goo.gl/dgYV8Tbom1sYMMUK8",
      image: "https://d1pk12b7bb81je.cloudfront.net/thumbor/TKatlSEdt8ZEuB6-Yn3hCzZJ_II=/300x300/https://d1pk12b7bb81je.cloudfront.net/okdataengine/appmedia/images/137/137780/QM_StunningSunset.jpeg.jpg",
    },
    { title: "Lake Eufaula - Eufaula", description: "When it comes to sunsets, Lake Eufaula reigns supreme.", 
      link: "https://maps.app.goo.gl/riYMxe7qBaPtW8RU8",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/01/93/7e/95/a-crane-ushers-out-the.jpg" },
    { title: "Mayo Penthouse Bar - Tulsa", description: "A hot spot for sunset watching since the 1920s, the Mayo Penthouse Bar on top of the historic Mayo Hotel boasts spectacular city views that look best at twilight.", 
      link: "https://maps.app.goo.gl/yRG9WXB6RQggxsTr5", 
      image: "https://d1pk12b7bb81je.cloudfront.net/thumbor/sJHLD8TicOUel9RRtbzZkeGmI6E=/full-fit-in/800x800/https://d1pk12b7bb81je.cloudfront.net/okdataengine/appmedia/images/106/106646/penthouse%20view.jpg" },
    { title: "Oklahoma River Cruises – Oklahoma City", description: "Enjoy a sunset cruise on the Oklahoma River.", 
      link: "https://maps.app.goo.gl/ngQdwPUeXeoEDkue9", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTXb7sO8gMzGHMMOBlx6y_l5SivtVoud9Bg&s" },
    { title: "Lake Murray - Ardmore", description: "Spring-fed and crystal clear, Ardmore’s Lake Murray boasts enchanting views of the sunset.", 
      link: "https://maps.app.goo.gl/5MExUagZEu64YGQx6", 
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/lake-murray-sunset-21-joseph-c-hinson-photography.jpg" },
    { title: "Veterans Lake - Sulphur", description: "Located within the scenic Chickasaw National Recreation Area, Veterans Lake in Sulphur is so private many visitors overlook it.", 
      link: "https://maps.app.goo.gl/hDoUKdpEtxSTnNidA", 
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/veterans-lake-sunset-katherine-worley.jpg" },
    { title: "Mt. Scott - Medicine Park", description: "A stunning sunset from the top of Mount Scott! There's no shortage of breathtaking views at the Wichita Mountains Wildlife Refuge", 
      link: "https://maps.app.goo.gl/HN3qUdZckUYLKkZr5", 
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/hope-and-heart-sunset-at-summit-of-mount-scott-in-oklahoma-southern-plains-photography.jpg" },
      { title: "Arkansas River - Tulsa", description: "The Arkansas River is a great place to catch a sunset in Tulsa.",
      link: "https://maps.app.goo.gl/WoChy9NF8kMr3B4D7",
      image: "https://images.fineartamerica.com/images-medium-large-5/sunset-at-cooks-landing-arkansas-river-jason-politte.jpg"
      }
      

  ];
  return (
    <div className="App">
      <h1>Best Sunset Spots In Oklahoma</h1>
      <h3>Discover the Beauty of Oklahoma&apos;s Sunsets</h3>
      <CardList items={sunsets} />
    </div>
  );
};

export default App;
