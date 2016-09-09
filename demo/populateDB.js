function populateNewDB() {

  const images = [
    'http://static1.visitfinland.com/wp-content/uploads/Header_sunset_Tampere-400x300.jpg',
    'http://www.interestingemails.com/wp-content/uploads/2011/12/beautiful-scenery-pictures-400x300.jpg',
    'http://3.bp.blogspot.com/-5iqaRuw2nps/TouHNAXdXoI/AAAAAAAAAe4/FIgPo0yJEcU/s1600/nature+scenery+wallpaper-2.jpg',
    'http://www.interestingemails.com/wp-content/uploads/2011/12/beautiful-desert-scenery-400x300.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/c1/5e/1e/c15e1e1e5bba2733e555a27eecd28ef3.jpg',
    'http://static3.businessinsider.com/image/4c1249fe7f8b9aa91fed0100-1190-625/photos-zhangjiajie--the-place-that-inspired-the-beautiful-scenery-in-avatar.jpg',
    'http://simplegoodandtasty.com/sites/default/files/images/hunting_nature.preview.jpg',
    'http://www.100steps.info/images/Boardman-SSC-Lone-Ranch-Beach-table-overlooking-beach-400x300.jpg',
    'https://c2.staticflickr.com/4/3200/3027179851_298dc82f08.jpg',
    'http://static4.businessinsider.com/image/4dc00aef49e2aec42a1e0000-1190-625/beautiful-abbottabad-actually-bin-laden-was-living-in-a-scenic-tourist-town.jpg',
    'http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a73de9e507970d-pi',
    'http://2.bp.blogspot.com/_bRxsZ6mMWDw/SMoOrdxcPvI/AAAAAAAAAlw/itjhUD0OdgE/s400/sight+2.jpg',
    'http://www.americanwhitewater.org/resources/images/contents/32119-2.jpg',
    'http://1.bp.blogspot.com/_XGnQrL8fEK4/TGvGWdiCmhI/AAAAAAAAAF8/o1WU9epjjac/s400/beautiful-beach-nature-scenery.jpg',
    'http://questtours.in/wp-content/uploads/2016/02/Scenic_Sri_Lanka1-400x300.jpg',
    'http://niackery.com/wp-content/uploads/2014/10/yokjido-scenery-dsc00015-400x300.jpg'
  ];

  const captions = [
    'Amber sunset',
    'Mountain backdrop',
    'Mountain reflection',
    'Long road',
    'Green nature',
    'High clif',
    'Desert sunset',
    'Misty beach',
    'Snowy mountain',
    'Nature cabin',
    'Ocean side',
    'Waterfall',
    'Raging rapids',
    'Purple sunset',
    'Flower garden',
    'Island'
  ];

  for (let i = 0; i < images.length; i++) {
    sheep.post(dbName, colName, { caption: captions[i], image: images[i] });
  }
}
