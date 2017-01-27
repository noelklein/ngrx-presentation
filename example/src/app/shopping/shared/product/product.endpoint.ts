import 'rxjs/add/operator/map';
import { ProductCategory } from '../models/product-category';
import { ProductListOptions } from '../models/product-list';
import { ProductState, ShoppingState } from '../shopping.state';
import { ProductsResponse } from './product.responses';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class ProductEndpoint {

  constructor(
    private http: Http,
    private store: Store<ShoppingState>
  ) { }

  public fetchCategories(): Observable<ProductCategory[]> {
    return Observable.timer(5000)
      .take(1)
      .map(() => {
        return {
          json: () => getProductCategories()
        };
      })
      // return this.http
      //   .get(`${environment.endpoint}/productCategories`)
      .map((response) => response.json() as ProductCategory[]);
  }

  public fetchProduct(id: number): Observable<ProductState> {
    return Observable.timer(5000)
      .take(1)
      .map(() => {
        return {
          json: () => getProducts()
        };
      })
      .map((response) => {
        return {
          json: () => response.json().results.find((product) => product.productId === id)
        };
      })
      // return this.http
      //   .get(`${environment.endpoint}/products/${id}`)
      .map((response) => response.json() as ProductState);
  }

  public fetchProducts(options: ProductListOptions): Observable<ProductsResponse> {
    return Observable.timer(5000)
      .take(1)
      .map(() => {
        return {
          json: () => getProducts()
        };
      })
      // const searchParams = new URLSearchParams();
      // searchParams.set('sortColumn', options.sortColumn);
      // searchParams.set('pageSize', options.pageSize.toString());
      // searchParams.set('pageNumber', options.currentPage.toString());
      // if (options.selectedProductCategories.length > 0) {
      //   const categoryFilter = {
      //     GroupOp: 1,
      //     Conditions: options.selectedProductCategories.map((categoryId) => {
      //       return {
      //         Field: 'productCategoryId',
      //         Op: 'eq',
      //         Data: categoryId
      //       };
      //     })
      //   };
      //   searchParams.set('filters', JSON.stringify(categoryFilter));
      // }
      // return this.http
      //   .get(`${environment.endpoint}/products`, { search: searchParams })
      .map((response) => response.json());
  }
}

function getProductCategories() {
  return [
    {
      productCategoryId: 13,
      name: 'Electronics'
    },
    {
      productCategoryId: 14,
      name: 'Video Games'
    },
    {
      productCategoryId: 15,
      name: 'Tools'
    },
    {
      productCategoryId: 16,
      name: 'Appliances'
    },
    {
      productCategoryId: 17,
      name: 'Books'
    },
    {
      productCategoryId: 18,
      name: 'Movies'
    },
    {
      productCategoryId: 19,
      name: 'Music'
    }
  ];
}

/* tslint:disable */
function getProducts(): ProductsResponse {
  return {
    pageNumber: 1,
    totalPages: 5,
    totalRecords: 61,
    results: [
      {
        productId: 67,
        name: 'If I Stay',
        description: 'In the blink of an eye everything changes. Seventeen ­year-old Mia has no memory of the accident; she can only recall what happened afterwards, watching her own damaged body being taken from the wreck. Little by little she struggles to put together the pieces- to figure out what she has lost, what she has left, and the very difficult choice she must make. Heartwrenchingly beautiful, this will change the way you look at life, love, and family. Now a major motion picture starring Chloe Grace Moretz, Mia\'s story will stay with you for a long, long time.',
        price: 6.01,
        productCategoryId: 17
      },
      {
        productId: 68,
        name: 'Player\'s Handbook (Dungeons & Dragons)',
        description: 'The Player’s Handbook is the essential reference for every Dungeons & Dragons® roleplayer. It contains rules for character creation and advancement, backgrounds and skills, exploration and combat, equipment, spells, and much more. Use this book to create exciting characters from among the most iconic D&D races and classes. Dungeons & Dragons immerses you in a world of adventure. Explore ancient ruins and deadly dungeons. Battle monsters while searching for legendary treasures. Gain experience and power as you trek across uncharted lands with your companions. The world needs heroes. Will you answer the call?',
        price: 29.97,
        productCategoryId: 17
      },
      {
        productId: 69,
        name: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption',
        description: 'In boyhood, Louis Zamperini was an incorrigible delinquent. As a teenager, he channeled his defiance into running, discovering a prodigious talent that had carried him to the Berlin Olympics. But when World War II began, the athlete became an airman, embarking on a journey that led to a doomed flight on a May afternoon in 1943. When his Army Air Forces bomber crashed into the Pacific Ocean, against all odds, Zamperini survived, adrift on a foundering life raft. Ahead of Zamperini lay thousands of miles of open ocean, leaping sharks, thirst and starvation, enemy aircraft, and, beyond, a trial even greater. Driven to the limits of endurance, Zamperini would answer desperation with ingenuity; suffering with hope, resolve, and humor; brutality with rebellion. His fate, whether triumph or tragedy, would be suspended on the fraying wire of his will.',
        price: 9.6,
        productCategoryId: 17
      },
      {
        productId: 70,
        name: 'Frozen Little Golden Book',
        description: 'Walt Disney Animation Studios presents an epic tale of adventure and comedy with Frozen. When a prophecy traps a kingdom in eternal winter, Anna, a young dreamer, must team up with Kristoff, a daring mountain man, and his reindeer on the grandest of journeys to find Anna\'s sister, the Snow Queen Elsa, and put an end to her icy spell. Encountering mystical trolls, a hilarious snowman named Olaf, Everest-like extremes, and magic at every turn, Anna and Kristoff battle the elements in a race to save the kingdom from destruction. The comedy-adventure Frozen journeys into theaters in November 2013',
        price: 2.17,
        productCategoryId: 17
      },
      {
        productId: 71,
        name: 'The Freemasons: A History of the World\'s Most Powerful Secret Society',
        description: 'What did Mozart and Bach, Oscar Wilde and Anthony Trollope, George Washington and Frederick the Great, Winston Churchill and Franklin D. Roosevelt have in common? They were all Freemasons, a subject of endless fascination. To the layman, they are a mysterious brotherhood of profound if uncertain influence, a secret society purported in some popular histories to have its roots in the fabled order of the Knights Templar, or in the mysteries of the Egyptian pyramids. They evoke fears of world domination by a select few who enjoy privileged access to wealth and the levers of power. The secrecy of their rites suggests the taint of sacrilege, and their hidden loyalties are sometimes accused of undermining the workings of justice and the integrity of nations.',
        price: 7.82,
        productCategoryId: 17
      },
      {
        productId: 72,
        name: 'Edge of Eternity: Book Three of The Century Trilogy',
        description: 'East German teacher Rebecca Hoffman discovers she’s been spied on by the Stasi for years and commits an impulsive act that will affect her family for generations… George Jakes, himself bi-racial, bypasses corporate law to join Robert F. Kennedy’s Justice Department and finds himself in the middle of not only the seminal events of the civil rights battle, but also a much more personal battle… Cameron Dewar, the grandson of a senator, jumps at the chance to do some espionage for a cause he believes in, only to discover that the world is much more dangerous than he’d imagined… Dimka Dvorkin, a young aide to Khrushchev, becomes an agent for good and for ill as the Soviet Union and the United States race to the brink of nuclear war, while his twin sister, Tania, carves out a role that will take her from Moscow to Cuba to Prague to Warsaw—and into history.',
        price: 12.5,
        productCategoryId: 17
      },
      {
        productId: 73,
        name: '100 Days of Real Food: How We Did It, What We Learned, and 100 Easy, Wholesome Recipes Your Family Will Love',
        description: 'The creator of the 100 Days of Real Food blog draws from her hugely popular website to offer simple, affordable, family-friendly recipes and practical advice for eliminating processed foods from your family\'s diet.',
        price: 19.99,
        productCategoryId: 17
      },
      {
        productId: 74,
        name: 'The Organized Mind: Thinking Straight in the Age of Information Overload',
        description: 'The information age is drowning us with an unprecedented deluge of data. At the same time, we’re expected to make more—and faster—decisions about our lives than ever before. No wonder, then, that the average American reports frequently losing car keys or reading glasses, missing appointments, and feeling worn out by the effort required just to keep up.',
        price: 16.77,
        productCategoryId: 17
      },
      {
        productId: 75,
        name: 'Gray Mountain: A Novel',
        description: 'The year is 2008 and Samantha Kofer’s career at a huge Wall Street law firm is on the fast track—until the recession hits and she gets downsized, furloughed, escorted out of the building. Samantha, though, is one of the “lucky” associates. She’s offered an opportunity to work at a legal aid clinic for one year without pay, after which there would be a slim chance that she’d get her old job back. In a matter of days Samantha moves from Manhattan to Brady, Virginia, population 2,200, in the heart of Appalachia, a part of the world she has only read about. Mattie Wyatt, lifelong Brady resident and head of the town’s legal aid clinic, is there to teach her how to help real people with real problems. For the first time in her career, Samantha prepares a lawsuit, sees the inside of an actual courtroom, gets scolded by a judge, and receives threats from locals who aren’t so thrilled to have a big-city lawyer in town. And she learns that Brady, like most small towns, harbors some big secrets.',
        price: 11.99,
        productCategoryId: 17
      },
      {
        productId: 76,
        name: 'Ready Player One: A Novel',
        description: 'In the year 2044, reality is an ugly place. The only time teenage Wade Watts really feels alive is when he\'s jacked into the virtual utopia known as the OASIS. Wade\'s devoted his life to studying the puzzles hidden within this world\'s digital confines—puzzles that are based on their creator\'s obsession with the pop culture of decades past and that promise massive power and fortune to whoever can unlock them. But when Wade stumbles upon the first clue, he finds himself beset by players willing to kill to take this ultimate prize. The race is on, and if Wade\'s going to survive, he\'ll have to win—and confront the real world he\'s always been so desperate to escape.',
        price: 7.96,
        productCategoryId: 17
      },
      {
        productId: 77,
        name: 'Seiki SE50UY04 50-Inch 4K UHD 120Hz LED HDTV',
        description: 'Seiki SE50UY04 50-Inch 4K UHD 120Hz LED HDTV',
        price: 499.99,
        productCategoryId: 13
      },
      {
        productId: 78,
        name: 'Samsung BD-F5700 Wi-Fi Blu-Ray Player ',
        description: 'Supports Netflix, Accuweather, YouTube, Twitter, Flicker, Facebook, Pandora, Vudu, Cinema Now, Flingo, Phapsody. Playback formats include MPEG2/4, AVCHD, MKV, WMV, JPEG, LPCM, AAC, MP3, WMA',
        price: 99.99,
        productCategoryId: 13
      },
      {
        productId: 79,
        name: 'Amazon Fire TV',
        description: 'Fire TV is an easy way to enjoy Netflix, Prime Instant Video, Hulu Plus, music, photos, games, and more on your HDTV. It has voice search that works -- simply speak the title, actor, or genre into the remote to instantly find what you want to watch. Fire TV has an exclusive new feature called ASAP that predicts the movies and TV episodes you\'ll like and gets them ready to stream instantly. With a fast, fluid interface, high definition 1080p video, and Dolby Digital Plus surround sound, Fire TV looks and sounds amazing.',
        price: 99.99,
        productCategoryId: 13
      },
      {
        productId: 80,
        name: 'SONOS PLAYBAR TV Soundbar and Wireless Speaker for Streaming Music',
        description: 'The SONOS PLAYBAR offers simple setup, sophisticated home theater acoustics, and wireless streaming of all your music. Purchase now to get a free wall mount for your wireless home theater system.',
        price: 699.99,
        productCategoryId: 13
      },
      {
        productId: 81,
        name: 'Parrot Zik Wireless Noise Cancelling Headphones with Touch Control - Black/Silver',
        description: 'Parrot, along with world-renowned French designer Phillipe Starck, have collaborated once again to create Zik, headphones combining advanced technology and sleek design.',
        price: 344.99,
        productCategoryId: 13
      },
      {
        productId: 82,
        name: 'Jabra FREEWAY Bluetooth Speakerphone',
        description: 'Speakerphone for the car with rich and crisp sound from 3 speakers and Virtual Surround sound',
        price: 59.99,
        productCategoryId: 13
      },
      {
        productId: 83,
        name: 'Denon AVR-E300 5.1 Channel 3D Pass Through and Networking Home Theater AV Receiver with AirPlay',
        description: 'Play any song in any room with elegantly designed, compact wireless speakers. Easily connect to an existing Wi-Fi network to bring Denon-quality audio to any or all rooms, with an app available for both iOS and Android',
        price: 249.99,
        productCategoryId: 13
      },
      {
        productId: 84,
        name: 'Garmin eTrex 20 Worldwide Handheld GPS Navigator',
        description: 'Garmin\'s eTrex GPS series offers reliable satellite navigation, making it a favorite of hikers, hunters, and geocachers. The eTrex 20 is equipped with a high-sensitivity GPS receiver, a 2.2-inch color display, and ships with a worldwide basemap with relief. Add a wide array of detailed topographic, marine, and road maps, and start mapping out your next adventure.',
        price: 129.99,
        productCategoryId: 13
      },
      {
        productId: 85,
        name: 'Sony DSC-RX100M III Cyber-shot Digital Still Camera',
        description: 'Absolutely stunning picture quality, compact enough to take anywhere. Now your photos maintain soft background defocus even when zoomed in with the improved f1.8-2.8 24-70mm Zeiss lens.',
        price: 798.99,
        productCategoryId: 13
      },
      {
        productId: 86,
        name: 'Linksys WRT1900AC Dual-Band+ Wi-Fi Wireless Router',
        description: 'Bring unparalleled Wi-Fi performance into your home with the WRT1900AC Dual Band Gigabit Wi-Fi Router from Linksys. Featuring a unique four external antenna configuration and a powerful 1.2 GHz dual-core processor, the router is engineered to support active online households by eliminating dead spots in multistory buildings. Multiple users can simultaneously game online, stream movies, and transfer files without lagging interruptions. In addition to four Gigabit Ethernet ports, the router provides connectivity to wired devices via a USB 3.0 port and dual eSATA/USB 2.0 port, letting you transfer huge files without the wait. The WRT1900AC also is equipped with exclusive Linksys Smart Wi-Fi software for total home network control and is open source ready for advanced users who want to customize their firmware.',
        price: 249.99,
        productCategoryId: 13
      },
      {
        productId: 87,
        name: 'Bose SoundLink Bluetooth Speaker III',
        description: 'Meet the speaker that brings your music and friends together—with a style that’s all your own. The SoundLink Bluetooth speaker III is our best-performing mobile Bluetooth speaker. It plays louder and longer than its popular predecessor, with advanced Bose technologies that reproduce the fullness, clarity and depth of your music. And a colorful assortment of optional covers let you personalize your speaker.',
        price: 299.99,
        productCategoryId: 13
      },
      {
        productId: 88,
        name: 'Titan Fall',
        description: 'Prepare for Titanfall. Crafted by one of the co-creators of Call of Duty and other key developers behind the Call of Duty franchise, Titanfall is an all-new universe juxtaposing small vs. giant, natural vs. industrial and man vs. machine. The visionaries at Respawn have drawn inspiration from their proven experiences in first-person action and with Titanfall are focused on bringing something exciting the next generation of multiplayer gaming.',
        price: 59.0,
        productCategoryId: 14
      },
      {
        productId: 89,
        name: 'Call of Duty: Ghosts',
        description: 'Call of Duty: Ghosts is an extraordinary step forward for one of the largest entertainment franchises of all-time. This new chapter in the Call of Duty franchise features a new dynamic where players are on the side of a crippled nation fighting not for freedom, or liberty, but simply to survive. Fueling this all new Call of Duty experience, the franchise’s new next-gen engine delivers stunning levels of immersion and performance, all while maintaining the speed and fluidity of 60 frames-per-second across all platforms.',
        price: 59.0,
        productCategoryId: 14
      },
      {
        productId: 90,
        name: 'Assassin\'s Creed IV Black Flag',
        description: 'EXPLORE AN OPEN WORLD FILLED WITH OPPORTUNITIES: Discover the most diverse Assassin\'s Creed world ever created. From Kingston to Nassau, explore 50 unique locations where you can live the life of a pirate.',
        price: 24.99,
        productCategoryId: 14
      },
      {
        productId: 91,
        name: 'Grand Theft Auto V',
        description: 'Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV.',
        price: 45.0,
        productCategoryId: 14
      },
      {
        productId: 92,
        name: 'Watch Dogs',
        description: 'All it takes is the swipe of a finger. We connect with friends. We buy the latest gadgets and gear. We find out what’s happening in the world. But with that same simple swipe, we cast an increasingly expansive shadow. With each connection, we leave a digital trail that tracks our every move and milestone, our every like and dislike. And it’s not just people. Today, all major cities are networked. Urban infrastructures are monitored and controlled by complex operating systems.',
        price: 50.0,
        productCategoryId: 14
      },
      {
        productId: 93,
        name: 'Thief',
        description: 'Garrett, the Master Thief, steps out of the shadows into the City. In this treacherous place, where the Baron\'s Watch spreads a rising tide of fear and oppression, his skills are the only things he can trust. Even the most cautious citizens and their best-guarded possessions are not safe from his reach. As an uprising emerges, Garrett finds himself entangled in growing layers of conflict. Lead by Orion, the voice of the people, the tyrannized citizens will do everything they can to claim back the City from the Baron\'s grasp. The revolution is inevitable. If Garrett doesn\'t get involved, the streets will run red with blood and the City will tear itself apart.',
        price: 29.0,
        productCategoryId: 14
      },
      {
        productId: 94,
        name: 'BioShock Infinite',
        description: 'BioShock Infinite is a first-person shooter like you’ve never seen. Set in 1912, players assume the role of former Pinkerton agent Booker DeWitt, sent to the flying city of Columbia on a rescue mission. His target? Elizabeth, imprisoned since childhood. During their daring escape, Booker and Elizabeth form a powerful bond -- one that lets Booker augment his own abilities with her world-altering control over the environment. Together, they fight from high-speed Sky-Lines, in the streets and houses of Columbia, on giant zeppelins, and in the clouds, all while learning to harness an expanding arsenal of weapons and abilities, and immersing players in a story that is not only steeped in profound thrills and surprises, but also invests its characters with deep emotional bonds.',
        price: 20.0,
        productCategoryId: 14
      },
      {
        productId: 95,
        name: 'Crysis 3',
        description: 'Crysis 3 is a First-Person Shooter (FPS) set within a frightening future New York City. The game is a sequel to the 2011 release, Crysis 2, continuing an unfolding adventure revolving around the symbiotic relationship between the wearer of the game\'s iconic nanosuit, the current protagonist, and the memories of an earlier protagonist stored within the suit. Game features include sandbox shooter gameplay that allows players to choose their path, an upgradable nanosuit, expanded multiplayer options, an explosive arsenal of weapons, and improved graphics provided by the CryENGINE game engine.',
        price: 20.0,
        productCategoryId: 14
      },
      {
        productId: 96,
        name: 'Destiny',
        description: 'From the Creators of Halo and the company that brought you Call of Duty. In Destiny you are a Guardian of the last city on Earth, able to wield incredible power. Explore the ancient ruins of our solar system, from the red dunes of Mars to the lush jungles of Venus. Defeat Earth’s enemies. Reclaim all that we have lost. Become legend.',
        price: 60.0,
        productCategoryId: 14
      },
      {
        productId: 97,
        name: 'Middle Earth: Shadow of Mordor',
        description: 'You are Talion, a Ranger of the Black Gate, keeping watch over Mordor which has remained undisturbed for ages. In the blink of an eye, everything is taken from you - your friends, your family, and even your own life. Resurrected by a vengeful spirit, you must now embark on a relentless vendetta against those who have wronged you. Fight through Mordor and uncover the truth of the spirit that compels you, discover the origins of the Rings of Power, build your legend and ultimately confront the evil of Sauron in this new chronicle in Middle-earth.',
        price: 60.0,
        productCategoryId: 14
      },
      {
        productId: 98,
        name: 'Hammer',
        description: 'Basic pounding tool. Not everything is a nail though.',
        price: 10.0,
        productCategoryId: 15
      },
      {
        productId: 99,
        name: 'Philips Head Screwdriver',
        description: 'Turns screws that look like a plus sign.',
        price: 5.0,
        productCategoryId: 15
      },
      {
        productId: 100,
        name: 'Flathead Screwdriver',
        description: 'Turns screws that look like a minus sign.',
        price: 5.0,
        productCategoryId: 15
      },
      {
        productId: 101,
        name: 'Saw',
        description: 'Strikes fear into the hearts of all trees and other wood-based products!',
        price: 12.0,
        productCategoryId: 15
      },
      {
        productId: 102,
        name: 'Wrench',
        description: 'Helps you go from finger tight to tool tight with just a few simple turns.',
        price: 0.0,
        productCategoryId: 15
      },
      {
        productId: 103,
        name: 'LG Graphite 5.1 Cu Ft Front Load Steam Washer',
        description: 'LG WM8000HVA 5.1 Cu. Ft. Mega Capacity Electric Washer with TurboWash Technology in white reduces the amount of time it takes to do a load of laundry. With its mega capacity drum, now you can was a king size comforter and full set of bedding in a single load. LG\'s TurboWash technology allows you to save up to 20 minutes on larger loads, while still maintaining outstanding cleaning performance. This washer showcases supercharged steam cleaning technology and TurboWash that virtually eliminates dirt and wrinkles to offer a deeper and more thorough cleaning. Plus, ColdWash powered by 6Motion technology penetrates more deeply into fabrics; this washer can get any stain out of any fabric in near record time. The LG DLGX8001V 9.0 Cu. Ft. Mega Capacity Gas Dryer with Steam Technology in white has enough room to fit a king sized comforter and a full set of bedding all together in one load. TrueSteam technology generates real steam to reduce wrinkles, odors and reduce the need for ironing. The SpotClean cycle effectively removes stains without putting them in the washer, this dryer makes every job easier. Plus, the sensor dry system will detect the level of moisture in the fabric and automatically adjust the drying time and temperature.',
        price: 999.0,
        productCategoryId: 16
      },
      {
        productId: 104,
        name: 'Speed Queen ADG4BRG 27 Gas Dryer',
        description: '7.0 cu. ft. Capacity, 4 Drying Cycles',
        price: 800.0,
        productCategoryId: 16
      },
      {
        productId: 105,
        name: 'Cuisinart DLC-2009CHB Prep 9 9-Cup Food Processor',
        description: 'With its powerful motor, this convenient food processor quickly and easily slices, dices, chops, and purees, helping to reduce prep time in the kitchen. The appliance comes with a large 9-cup work bowl that makes it easy to create an entire meal from scratch. The unit\'s extra-large one-piece feed tube accommodates whole fruits and vegetables and allows for continuous processing. Accessories include a stainless-steel medium slicing disc (4 mm), a stainless-steel shredding disc, a chopping/mixing blade, a dough blade, and a detachable disc stem, plus a plastic spatula, a recipe/instruction book, and a how-to DVD. The unit\'s compact build means it will fit comfortably on any countertop, and its brushed stainless finish adds a touch of elegance to any modern kitchen. All removable parts clean up easily by hand or in the dishwasher. The food processor measures 9-1/2 by 7 by 13 inches and carries a three-year limited warranty with a 10-year limited warranty on the motor.',
        price: 125.0,
        productCategoryId: 16
      },
      {
        productId: 106,
        name: 'Proctor-Silex 26500Y Durable Belgian Waffle Baker',
        description: 'We\'ve all heard that breakfast is the most important meal of the day. But too often we grab the easiest thing available instead of something with real nutritional value and flavor. Waffles, especially when made with whole-grain flour, are an extremely easy way to start the day on the right foot. The Morning Baker Belgian waffle iron takes the edge off morning hunger. It heats quickly, lets you know when it\'s ready, and cooks waffles in only a few minutes--take that time to slice some fruit to top them with. Cleaning up is easy, too, since the nonstick grilling surface wipes clean with a damp sponge or paper towel. The whole iron can be stored either horizontally or vertically, depending on space limitations.',
        price: 25.0,
        productCategoryId: 16
      },
      {
        productId: 107,
        name: 'Cuisinart ICE-30BC Pure Indulgence 2-Quart Automatic Frozen Yogurt, Sorbet, and Ice Cream Maker',
        description: 'Housed in brushed stainless steel with an embossed logo, this fully automatic small appliance makes frozen yogurt, sorbet, and homemade ice cream in as little as 25 minutes. The frozen-dessert maker features a heavy-duty motor and a double-insulated freezer bowl that holds up to 2 quarts of frozen dessert at a time. Simply add ingredients, turn the machine on, and frozen drinks and desserts are ready in minutes. Its large ingredient spout allows for easily adding favorite mix-ins, and an instruction book and recipes come included. A fun addition to any birthday party or backyard barbecue, the frozen-dessert maker measures approximately 8-1/4 by 8 by 11-1/4 inches and carries a three-year limited warranty. ',
        price: 65.0,
        productCategoryId: 16
      },
      {
        productId: 108,
        name: 'Nespresso Inissia Espresso Maker',
        description: 'Tiny foot print, compact, lightweight and equipped with an ergonomic handle, the new Inissia machine fits perfectly into any interior design. Nespresso began more than 25 years ago with a simple but revolutionary idea, to create the perfect cup of Espresso coffee with exquisite crema, tantalizing aroma and full bodied taste - just like skilled baristas. As the worldwide pioneer, Nespresso redefined the way coffee lovers around the world enjoy their espresso coffee through a unique combination of premium quality Grand Cru coffees, stylish coffee machines and exceptional customer service.',
        price: 90.0,
        productCategoryId: 16
      },
      {
        productId: 109,
        name: 'The Amazing Spider-Man 2',
        description: 'It\'s great to be Spider-Man (Andrew Garfield). For Peter Parker, there\'s no feeling quite like swinging between skyscrapers, embracing being the hero, and spending time with Gwen (Emma Stone). But being Spider-Man comes at a price: only Spider-Man can protect his fellow New Yorkers from the formidable villains that threaten the city. With the emergence of Electro (Jamie Foxx), Peter must confront a foe far more powerful than himself. And as his old friend, Harry Osborn (Dane DeHaan), returns, Peter comes to realize that all of his enemies have one thing in common: Oscorp.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 110,
        name: 'X-Men: Days of Future Past',
        description: 'Wolverine travels back to the 1970\'s without having to hit 88 MPH.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 111,
        name: 'The Ultimate Bourne Collection Trilogy ',
        description: 'The Bourne Identity, The Bourne Supremacy, and the Bourne Ultimatum',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 112,
        name: 'Fight Club',
        description: 'The first rule of fight club is there is no fight club.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 113,
        name: 'Inception',
        description: 'Acclaimed filmmaker Christopher Nolan directs an international cast in this sci-fi actioner that travels around the globe and into the world of dreams. Dom Cobb (Leonardo DiCaprio) is the best there is at extraction: stealing valuable secrets inside the subconscious during the mind’s vulnerable dream state. His skill has made him a coveted player in industrial espionage but also has made him a fugitive and cost him dearly. Now he may get a second chance if he can do the impossible: inception, planting an idea rather than stealing one. If they succeed, Cobb and his team could pull off the perfect crime. But no planning or expertise can prepare them for a dangerous enemy that seems to predict their every move. An enemy only Cobb could have seen coming.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 114,
        name: 'The Dark Knight Rises',
        description: 'It has been eight years since Batman vanished into the night, turning, in that instant, from hero to fugitive. Assuming the blame for the death of D.A. Harvey Dent, the Dark Knight sacrificed everything for what he and Commissioner Gordon both hoped was the greater good. For a time the lie worked, as criminal activity in Gotham City was crushed under the weight of the anti-crime Dent Act. But everything will change with the arrival of a cunning cat burglar with a mysterious agenda. Far more dangerous, however, is the emergence of Bane, a masked terrorist whose ruthless plans for Gotham drive Bruce out of his self-imposed exile. But even if he dons the cape and cowl again, Batman may be no match for Bane.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 115,
        name: 'The Matrix',
        description: 'Perception: Our day-in, day-out world is real. Reality: That world is a hoax, an elaborate deception spun by all-powerful machines of artificial intelligence that control us. Keanu Reeves and Laurence Fishbourne lead the fight to free humankind in the see-and-see-again cyberthriller written and directed by the Wachowski brothers - and the winner of four Academy Awards.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 116,
        name: 'Terminator 2: Judgment Day',
        description: 'Arnold Schwarzenegger returns as The Terminator in this explosive action-adventure spectacle. Now he\'s one of the good guys, sent back in time to protect John Connor, the boy destined to lead the freedom fighters of the future. Linda Hamilton reprises her role as Sarah Connor, John\'s mother, a quintessential survivor who has been institutionalized for her warning of the nuclear holocaust she knows is inevitable. Together, the threesome must find a way to stop the ultimate enemy - the T-1000, the most lethal Terminator ever created. Co- written, produced and directed by James Cameron (The Terminator, Aliens, Titanic), this visual tour de force is also a touching human story of survival.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 117,
        name: 'Jaws',
        description: 'Digitally remastered and fully restored from high resolution 35MM original film elements to get the most from your HDTV. Digital Copy of Jaws (Subject to expiration. Go to NBCUCodes.com for details.) UltraViolet Copy of Jaws (Subject to expiration. Go to NBCUCodes.com for details.) The Shark is Still Working: The Impact & Legacy of Jaws - All-new feature-length documentary featuring never-before-seen footage and interviews with cast and crew including Steven Spielberg, Richard Dreyfuss and Roy Scheider. The Making of Jaws: A feature-length documentary featuring interviews with key cast and crew. Jaws: The Restoration - An all-new in-depth look at the intricate process of restoring the movie. Deleted Scenes and Outtakes From the Set: An insider’s look at life on the set of Jaws, featuring an interview with Steven Spielberg. Storyboards Production Photos Marketing Jaws Jaws Phenomenon Original Theatrical Trailer pocket BLU: App for smartphones and tablets. Take content on the go! BD-Live: Internet-connected features. My Scenes: Bookmark your favorite scenes.',
        price: 14.99,
        productCategoryId: 18
      },
      {
        productId: 118,
        name: 'Guardians of the Galaxy: Awesome Mix Vol. 1',
        description: 'Guardians of the Galaxy: Awesome Mix Vol. 1',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 119,
        name: 'The Hunting Party',
        description: 'The Hunting Party',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 120,
        name: 'Frozen',
        description: 'Frozen Soundtrack',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 121,
        name: 'Pure Heroine',
        description: 'Pure Heroine',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 122,
        name: 'Nevermind (Remastered)',
        description: 'Nevermind (Remastered)',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 123,
        name: 'Crash My Party',
        description: 'Crash My Party',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 124,
        name: 'Best of the 80\'s',
        description: 'Best of the 80\'s',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 125,
        name: 'Best of the 90\'s',
        description: 'Best of the 90\'s',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 126,
        name: 'Best of the 70\'s',
        description: 'Best of the 70\'s',
        price: 9.99,
        productCategoryId: 19
      },
      {
        productId: 127,
        name: 'Best of the 60\'s',
        description: 'Best of the 60\'s',
        price: 9.99,
        productCategoryId: 19
      }
    ]
  };
}
