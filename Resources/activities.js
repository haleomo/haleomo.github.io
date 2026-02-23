var activityTypes = ["Beaches", 
                     "Hiking", 
                     "Nature Activities", 
                     "Cultural Activites", 
                     "Scenic Drives", 
                     "Indoor Activities",
                     "Snorkeling"
                    ]

var activities = {
    beach : {
        title: "Beaches",
        activities: [
            {
                name: "Maluaka Beach",
                description: "Located along a stretch of Wailea-Makena coastline, south of Keawala'i Congregational Church, and one of several spots known as \"Turtle Town.\" That makes this one of the best Maui beaches for snorkeling with sea turtles in their natural habitat. The parking area has restrooms and outdoor showers.",
                directions: "https://www.google.com/maps/dir/20.878026,-156.5105137/Maluaka+Beach,+Wailea-Makena,+HI+96753/@20.7648261,-156.5530609,12z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954db43845fc61d:0x9bcf0bdf9046172c!2sMaluaka+Beach!8m2!3d20.6502778!4d-156.4455556!16s%2Fg%2F1tg4llfg!4m9!1m1!4e1!1m5!1m1!1s0x7954db43845fc61d:0x9bcf0bdf9046172c!2m2!1d-156.4455556!2d20.6502778!3e0?entry=ttu",
                drivingTime: "40 Minutes",
                fee: "Free",
                proTip: "There are 2 entrances to the beach. The North entrance has a loading and unloading area next to the beach.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Waihe'e Beach",
                description: "This beach is off the beaten path behind the Waiehu Golf Course. It's located between the towns of Waihe'e and Waiehu, from the Kahekili Highway on Lower Waiehu Beach Park Road. It's a very nice beach for walking, fishing, and some surfing, especially with the larger winter swells. Waiehu is very picturesque with beautiful white sand contrasting with the blue-green shades of the ocean. There's a really nice view of Kahului across the bay. There are some rocks mixed in with the sand and it can get very windy here at times. If you'd like to come to a beach that isn't usually crowded, this may be a great choice. There's usually plenty of parking in the lot and along the side of the road. Beach access isn't far and there are a few benches to sit, relax, and enjoy the scenery. Other amenities include: barbeque grills, picnic tables, and a grassy area. There is no lifeguard here. <a href=\"Resources/MermaidTears.pdf\" target=\"_blank\">The Story of Seaglass</a> ",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Waihee+Beach+Park,+200+Halewaiu+Rd,+Wailuku,+HI+96793,+United+States/@20.9034325,-156.5166372,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7eab2cbe515d4dcb:0xf4a0ca86e94538c7!2m2!1d-156.4991298!2d20.9320498!3e0?entry=ttu",
                drivingTime: "20 minutes",
                fee: "Free",
                proTip: "This is a good walking beach and a nice spot for collecting sea glass. A very local vibe.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Keawekapu Beach",
                description: "Long strech of sand starting at Mauna Kai and extending to the Andaz. Evening breezes and incredible sunsets make this beach an incredible way to end a busy day on Maui.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Mana+Kai+Maui+Resort,+South+Kihei+Road,+Kihei,+HI,+USA/@20.7914424,-156.5554971,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954dabf3dc239bf:0x5b479ecc952c1567!2m2!1d-156.4464646!2d20.7048703!3e0?entry=ttu",
                drivingTime: "35 minutes",
                fee: "Free",
                proTip: "The beautiful lawn at the Mauna Kai is a gorgeous spot to watch the sunset.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Sugar Beach",
                description: "Long strech of sand reaching from North Kihei to Ma'alea. This is a good beach for a long walk along the water. You can park anywhere along the beach and explore the sand, canoe clubs, and see stunning views of West Maui Mountain.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Sugar+Beach+Resort,+North+Kihei+Road,+Kihei,+HI,+USA/@20.832756,-156.5253621,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d1a593307b29:0xbf481e405fc1013c!2m2!1d-156.4671817!2d20.7856206!3e0?entry=ttu",
                drivingTime: "20 minutes",
                fee: "Free",
                proTip: "After your walk refresh with shave ice from Ululani's or grab breakfast sweets at Sugar Beach Sweet Shop.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Olowalu Beach",
                description: "Good alternative beach for a windy day with protected swimming and easy approach into the water. The beach stretches from Ukemehame to Olowalu, with some of the best beach near Olowalu. The beach is next to the Honoapi'ilani Hawaii and is only a good beach alternative if the wind is hitting other beaches from easterly winds.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Olowalu+Beach,+Hawaii+96761,+United+States/@20.8280029,-156.6039086,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d620a4d0104d:0x6a34602b0ffa082e!2m2!1d-156.6156274!2d20.8090713!3e0?entry=ttu",
                drivingTime: "25 minutes",
                fee: "Free",
                proTip: "",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Ulua Beach",
                description: "Considered by many to be one of the best snorkeling beaches.",
                directions: "https://www.google.com/maps/dir/20.878022,-156.5105431/Ulua+Beach,+Wailea-Makena,+HI/@20.7854114,-156.5539903,42794m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x7954dadb40ecc1cb:0xee0b53d7dd663171!2m2!1d-156.4436167!2d20.6903433!3e0?entry=ttu",
                drivingTime: "35 minutes",
                fee: "Free",
                proTip: "The point along the North section of beach has the best snorkeling reef.",
                goodForKeiki: true,
				active: true
            }                        
        ]
    },
    hiking: {
        title: "Hiking",
        activities: [
            {
                name: "Waihe'e Ridge Trail",
                description: "This is a nice hike with spectacular views. Every direction you look, you’re treated with a different view – lush rainforest valley, Makamakaole Falls in the distance, and many spectacular views of the ocean. The trail is well maintained, with a couple of benches at choice overlooks along the way. There is even a picnic table at the pinnacle of the trail. It can be very slippery in the rain so wear shoes with good traction.",
                directions: "https://www.google.com/maps/dir/20.878022,-156.5105431/Waihee+Ridge+Trail,+Kahekili+Hwy,+Wailuku,+HI+96793/@20.9121872,-156.5424249,23697m/data=!3m2!1e3!4b1!4m18!1m7!3m6!1s0x7eab2b7af9533b0f:0x7ece6dcb872ff0a0!2sWaihee+Ridge+Trail!8m2!3d20.9529323!4d-156.5316222!16s%2Fg%2F1jglw0p6h!4m9!1m1!4e1!1m5!1m1!1s0x7eab2b7af9533b0f:0x7ece6dcb872ff0a0!2m2!1d-156.5316222!2d20.9529323!3e0?entry=ttu",
                drivingTime: "25 minutes",
                difficulty: "Strenuous",
                proTip: "Get to the trailhead before 8:30 AM to ensure parking. If you have to park in overflow parking, it adds an extra 2 miles to the hike.",
                goodForKeiki: false,
				active: true
            },
            {
                name: "Olinda Forest",
                description: "The fresh pine forest air invigorates as you walk the winding trail through a forest floor covered in red pine needles. The relaxing loop hike is good exercise without being strenuous, and is family friendly. ",
                directions: "https://www.google.com/maps/dir/20.87802,-156.5105479/Waihou+Spring+Forest+Reserve,+2463+Olinda+Rd,+Makawao,+HI+96768/@20.8416223,-156.4771765,12z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954ca337c105177:0xe3a4cca24f0684a8!2sWaihou+Spring+Forest+Reserve!8m2!3d20.8072692!4d-156.2797385!16s%2Fg%2F1vm_y2cm!4m9!1m1!4e1!1m5!1m1!1s0x7954ca337c105177:0xe3a4cca24f0684a8!2m2!1d-156.2797385!2d20.8072692!3e0?entry=ttu",
                drivingTime: "45 minutes",
                difficulty: "Easy. 1 mile Loop",
                proTip: "The loop trail is easy.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Olinda Forest -- Waihou Springs (Spur Trail)",
                description: "The right fork has a spur trail that leads to a view and a small bench. Beyond here the trail gets hazardous. A steep switch back trail to some small lava caves, begins just beyond the bench. This portion of trail is steep and has loose unstable footing so it is subject to closure due to trail conditions and trail collapse.",
                directions: "https://www.google.com/maps/dir/20.87802,-156.5105479/Waihou+Spring+Forest+Reserve,+2463+Olinda+Rd,+Makawao,+HI+96768/@20.8416223,-156.4771765,12z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954ca337c105177:0xe3a4cca24f0684a8!2sWaihou+Spring+Forest+Reserve!8m2!3d20.8072692!4d-156.2797385!16s%2Fg%2F1vm_y2cm!4m9!1m1!4e1!1m5!1m1!1s0x7954ca337c105177:0xe3a4cca24f0684a8!2m2!1d-156.2797385!2d20.8072692!3e0?entry=ttu",
                drivingTime: "45 minutes",
                difficulty: "Moderate. 2.4 miles round trip depending on trail choices.",
                proTip: "The loop trail is easy, if you hike down to the springs, there is a short hike up switchbacks to return to the loop.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Mahana Ridge Trail",
                description: "This long, difficult trail ascends from the ocean two thousand vertical feet into deep west Maui forests. The ultimate destination of the hike is the Maunalei Arboretum, but the entire trail contains a wealth of native and introduced trees and plants. Introduced plants include pineapples that you can spot next to the trail. It’s rewarding to hike any portion of this long trail. A good turn-around spot for a moderate hike is at a reservoir about halfway up the trail (see below). This trail can be incredibly muddy if it’s been raining a lot recently. The upper portions of the trail are especially bad when wet. Hit this one after a few sunny days during the dry season for best results. The trail starts north of the small church-like preschool across the road from DT Flemming Beach Park. Restroom and shower facilities are at the park.",
                directions: "https://www.google.com/maps/dir/20.8780188,-156.510555/Mahana+Ridge+Trail,+5855+Lower+Honoapiilani+Rd,+Lahaina,+HI+96761/@20.8908787,-156.678686,12z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7eaad5c6552d59a5:0xf364e4012bfb8150!2sMahana+Ridge+Trail!8m2!3d21.0040558!4d-156.6505333!16s%2Fg%2F11c5rv1yqt!4m9!1m1!4e1!1m5!1m1!1s0x7eaad5c6552d59a5:0xf364e4012bfb8150!2m2!1d-156.6505333!2d21.0040558!3e0?entry=ttu",
                drivingTime: "50 minutes",
                difficulty: "Strenous",
                proTip: "There is a lot of bad information concerning this hike on the internet, and even some mistakes on the trailhead signage. There used to be a shuttle to the Maunalei Arboretum at the top of the trail that allowed hikers to just descend back to the trailhead, making for an easy and pleasant hike. That shuttle is no longer available. The trailhead sign warns hikers of the fact the shuttle no longer operates. It also says that the full out-and-back hike is 17 miles. This is wrong. It’s less than 10.",
                goodForKeiki: false,
				active: true
            },
            
            {
                name: "Makawao Forest Reserve",
                description: "Kahakapao Loop Trail--Generally considered a moderately challenging route, it takes an average of 3 h 11 min to complete. This is a very popular area for birding, hiking, and horseback riding, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash. <a href=\"https://www.alltrails.com/en-gb/parks/hawaii/maui/makawao-forest-reserve\" target=\"_blank\">All Trails<\a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Makawao+Forest+Reserve+Mountain+Biking+Trails,+Haiku,+HI,+USA/@20.8850008,-156.4755042,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954ca57aa960537:0xdfce9b165596fb9b!2m2!1d-156.275298!2d20.832096!3e0?entry=ttu",
                drivingTime: "",
                difficulty: "Moderate",
                proTip: "",
                goodForKeiki: false,
				active: true
            },   
            {
                name: "Lahaina Pali Hike",
                description: "This is a difficult hike that offers huge views of the central part of Maui. The Lāhainā Pali Trail follows a historic old road that traverses high over the southern end of West Maui. The road is over 200 years old, but historians believe that this was earlier part of the Ala Loa Trail that traversed much of the island. Hike originating from Kahului side of the pali (East of Ma'alea) to the Lahaina side of the pali; the trail passes though the Kaheawa wind farm. <a href=\"https://www.alltrails.com/en-gb/trail/hawaii/maui/lahaina-pali-trail\" target=\"_blank\">All Trails</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Lahaina+Pali+Trail,+Lahaina+Pali+Trail+-+eastern+half,+Wailuku,+HI+96793,+United+States/@20.8397031,-156.5527765,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d6c4381c0c3d:0xcb9f10ed6b42e1ae!2m2!1d-156.5380384!2d20.7988967!3e0?entry=ttu",
                drivingTime: "15 minutes (East trail head)",
                difficulty: "Strenuous",
                proTip: "Go early to avoid the heat. Park at one of the trailheads and go out-and-back to the wind farm.",
                goodForKeiki: false,
				active: true
            },
            {
                name: "Pipiwai Trail",
                description: "3.4-mile out-and-back trail near Hana, Maui that offers a walk through a bamboo forest and many stunning waterfalls. Generally considered a moderately challenging route, it takes an average of 1 h 55 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
                directions: "https://www.google.com/maps/dir/20.878024,-156.510531/Pipiwai+Trailhead,+Hawaii+96713/@20.7741841,-156.5778429,10z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954a554c0cb0d0b:0xac400c4f3fdff275!2sPipiwai+Trailhead!8m2!3d20.6623472!4d-156.0443309!16s%2Fg%2F11tfbxpbzy!4m9!1m1!4e1!1m5!1m1!1s0x7954a554c0cb0d0b:0xac400c4f3fdff275!2m2!1d-156.0443309!2d20.6623472!3e0?entry=ttu",
                drivingTime: "2 hours 45 minutes",
                difficulty: "Moderate",
                proTip: "Parking is in Haleakala National Park (Fee).",
                goodForKeiki: true,
				active: true
            },
            
            {
                name: "Halemau'u Trailhead",
                description: "7.6 mile out-and-back trail starting at 8000 feet on the side of Haleakala. It offers stunning views of Haleakala Crater. It can seem like a mystical hike when the clouds engulf the switchbacks that cling to the side of the crater. The trail is open year-round and is beautiful to visit anytime.",
                directions: "https://www.google.com/maps/dir/20.8780245,-156.5105609/Halemau'u+Trailhead,+Halemau'u+Trail,+Kula,+HI+96790/@20.8182322,-156.5345754,11z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954b625ad8566b5:0x1d42e5bedc1aa63d!2sHalemau'u+Trailhead!8m2!3d20.7522771!4d-156.2284596!16s%2Fg%2F11by_dys8n!4m9!1m1!4e1!1m5!1m1!1s0x7954b625ad8566b5:0x1d42e5bedc1aa63d!2m2!1d-156.2284596!2d20.7522771!3e0?entry=ttu",
                drivingTime: "1 hour 6 minutes",
                difficulty: "Strenuous",
                proTip: "Parking is in Haleakala National Park (Fee). Reservations are required to enter the park between 3AM and 7AM.",
                goodForKeiki: false,
				active: true
            },
            {
                name: "Pu'u Olai cinder cone",
                description: "This hike is a cinder cone which is part of the long-dorment Haleakala Volcano system. It's not unusual to see a herd of deer at the base of the hill. There are also a few homeless people camping out, but they are few and they are friendly. The top is windy in a few places, but most of the hike has trees to shield you. The back side is far less traveled and requires a little more dexterity to manage the descent. This is no longer a marked trail in the state of Hawaii, on the island of Maui. You are allowed to hike it IF you can find the trail, but be prepared for an unmaintained trail. Park on Wailea-Ananui Road across from the (dirt) Oneuli Beach access road. Look for the trailhead on your left about 125 yards from the beach.",
                directions: "https://www.google.com/maps/dir/20.8780186,-156.5105532/Oneuli+Beach+access,+6873-6761+Makena+Rd,+Kihei,+HI+96753/@20.7584064,-156.5220055,12.43z/data=!4m18!1m7!3m6!1s0x7954db252d5c8e59:0x1856cbe7dec5bb64!2sOneuli+Beach+access!8m2!3d20.63755!4d-156.4443375!16s%2Fg%2F11rghc4nrk!4m9!1m1!4e1!1m5!1m1!1s0x7954db252d5c8e59:0x1856cbe7dec5bb64!2m2!1d-156.4443375!2d20.63755!3e0?entry=ttu",
                drivingTime: "35 minutes",
                difficulty: "Moderate",
                proTip: "Go early to avoid the heat. This is a great hike for spotting whales in the Winter season.",
                goodForKeiki: true,
				active: true
            },  
        ]
    },
    nature: {
        title: "Nature Activities",
        activities: [
            {
                name: "Green Sea Turtles at Ho'okipa Beach",
                description: "Sea turtles crawl onto the beach during any time of the year. If you go in the morning or the evening, you will be most likely to see turtles.",
                directions: "https://www.google.com/maps/dir/20.87802,-156.5105479/Ho'okipa+Beach+Park,+Hana+Highway,+Paia,+HI/@20.8983771,-156.474028,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x7eab330ae74efe51:0xd69131776ff145f!2m2!1d-156.356079!2d20.9342545!3e0?entry=ttu",
                drivingTime: "35 minutes",
                fee: "Free",
                proTip: "The turtles are on the east end of the beach by the restrooms.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Maui Ocean Center",
                description: "Home to one of the world’s largest displays of live Pacific corals, the Aquarium exhibits only marine life found in Hawaiian waters including tropical fish, sea turtles, sharks, stingrays, octopuses, sea jellies, and more. The Aquarium highlights the beauty of Hawaii’s undersea world while perpetuating the deep connection between the Hawaiian people and the sea. The Aquarium’s mission is to foster understanding, wonder, and respect for Hawaii’s marine life.",
                directions: "google.com/maps/dir/20.87802,-156.5105479/Maui+Ocean+Center,+The+Aquarium+of+Hawaii,+192+Maalaea+Rd,+Wailuku,+HI+96793/@20.8364217,-156.5355326,13z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954d130a0c031b3:0xad1cd589958ba5c8!2sMaui+Ocean+Center,+The+Aquarium+of+Hawaii!8m2!3d20.7926322!4d-156.5121616!16zL20vMDRsenF3!4m9!1m1!4e1!1m5!1m1!1s0x7954d130a0c031b3:0xad1cd589958ba5c8!2m2!1d-156.5121616!2d20.7926322!3e0?entry=ttu",
                drivingTime: "15 minutes.",
                fee: "$$$",
                proTip: "",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Green Sea Turtles at Kihei Boat Ramp",
                description: "You can often find turtles on the beach directly south of the boat ramps in the evening before the sun goes down. Take the trail next to the dumpster and follow it down to the sand beach or walk out a breif distance on the jetty.",
                directions: "https://www.google.com/maps/dir/20.87802,-156.5105479/K%C4%ABhei+Boat+Landing,+2920+S+Kihei+Rd,+Kihei,+HI+96753/@20.7948175,-156.5561562,12z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x7954dabc0130adf7:0xb15252f77a0fbffa!2m2!1d-156.4452609!2d20.7088339!3e0?entry=ttu",
                drivingTime: "30 minutes",
                fee: "Free",
                proTip: "",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Maui Butterfly Farm",
                description: "Get a hands-on introduction to the Maui Butterfly Farm during this small-group guided tour. Learn how butterflies are bred in the butterfly production facility and discover butterfly species that are native to Hawaii. Get a chance to feed home-bred butterflies in the butterfly lighthouse. Read more about The Maui Butterfly Farm Tour! - https://www.viator.com/tours/Maui/Butterfly-Farm-Tour-and-Scavenger-Hunt/d671-176274P1?mcid=56757 <a href=\"https://www.themauibutterflyfarm.com/?gclid=CjwKCAjw5MOlBhBTEiwAAJ8e1sC-i9B4gVcChF2LQwtiYS6c8259knlaJC8MSnCFUjm1z2PAkxd1ZhoC0tYQAvD_BwE\" target=\"_blank\">The Maui Butterfly Farm</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/The+Maui+Butterfly+Farm,+Olowalu+Village+Road,+Lahaina,+HI,+USA/@20.8280029,-156.6038692,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7955295d262908eb:0xfb72d41b990c84ab!2m2!1d-156.6226699!2d20.8117286!3e0?entry=ttu",
                drivingTime: "25 Minutes",
                fee: "Free",
                proTip: "",
                goodForKeiki: true,
				active: true
            }
            
        ]
    },
    cultural: {
        title: "Cultural Activities",
        activities: [{
            name: "World War II Buildings",
            description: "Maui was a training ground following the attack on Perl Harbor. There are several buildings and pill boxes on the island that are left from that time period. <a href=\"https://www.tourmaui.com/blog/world-war-2-history/\">Tour Maui</a>",
            directions: "",
            drivingTime: "",
            fee: "",
            proTip: "",
            goodForKeiki: false,
				active: true
        },
        {
            name: "Kepaniwai Cultural Park",
            description: "Waterside park with a Japanese temple & walks in themed gardens celebrating Hawaii's culture.",
            directions: "",
            drivingTime: "",
            fee: "",
            proTip: "",
            goodForKeiki: false,
				active: true
        },
        {
            name: "Olowalu Petroglyphs",
            description: "",
            directions: "",
            drivingTime: "",
            fee: "",
            proTip: "",
            goodForKeiki: false,
				active: true
        },
        {
            name: "Alexander & Baldwin Sugar Museum",
            description: "The rise of the sugar cane industry in Hawaiʻi in the 19th century is what brought workers here from all over the world, forming the basis of the melting pot of cultures we see represented in Hawaiʻi today. To learn about the beginnings of sugar cane and realize its impacts, check out the Alexander & Baldwin Sugar Museum in Puʻunene. Maui had the last remaining sugar mill in the islands, which closed at the end of 2016. <a href=\"https://www.sugarmuseum.com/\">Sugar Museum</a>",
            directions: "https://www.google.com/maps/dir/20.8780042,-156.5105362/Alexander+%26+Baldwin+Sugar+Museum,+3957+Hansen+Rd,+Puunene,+HI+96784/@20.8765723,-156.5036304,14z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954d28d2e5af8d9:0xe6ba2b869caf9aa2!2sAlexander+%26+Baldwin+Sugar+Museum!8m2!3d20.8693039!4d-156.4550957!16s%2Fm%2F010lvb1s!4m9!1m1!4e1!1m5!1m1!1s0x7954d28d2e5af8d9:0xe6ba2b869caf9aa2!2m2!1d-156.4550497!2d20.8692341!3e0?entry=ttu",
            drivingTime: "15 Minutes",
            fee: "$7 Adults",
            proTip: "The museum is open Monday through Thursday from 10 a.m. to 2 p.m. (last admission at 1 p.m.). Reservations are required, so make them online. One to two hours should be sufficient to explore the museum.",
            goodForKeiki: false,
				active: true
        },
        {
            name: "Bailey House Museum (HALE HŌʻIKEʻIKE)",
            description: "Hale Hōʻikeʻike houses more than 2,000 artifacts, 8,000 historic photos, and a full archive of historical documents, including maps and manuscripts. The museum will track Hawaiian history as well as the influence of the missionaries, who, arguably, shaped Hawaiʻi more than any other outside voice.",
            directions: "",
            drivingTime: "",
            fee: "$10 Adults",
            proTip: "Spend an hour or two exploring this museum. The museum’s gift shop, which supports the museum, sells locally made crafts and books.",
            goodForKeiki: false,
				active: true
        },
        {
            name: "Maui Arts and Cultural Center",
            description: "Maui Arts & Cultural CenterMACC is a world-class facility where popular and innovative performing artists can be enjoyed, connecting our community to the world through art. Also the site for the Schaefer International Gallery. <a href=\"https://www.mauiarts.org/\">MACC</a>",
            directions: "https://www.google.com/maps/dir/20.8780166,-156.5105527/Maui+Arts+%26+Cultural+Center,+1+Cameron+Way,+Kahului,+HI+96732/@20.8842696,-156.5162753,14z/data=!3m1!4b1!4m18!1m7!3m6!1s0x7954d326a0a6957f:0x7772b19d912adea8!2sMaui+Arts+%26+Cultural+Center!8m2!3d20.8937969!4d-156.4807026!16s%2Fm%2F0k2y2my!4m9!1m1!4e1!1m5!1m1!1s0x7954d326a0a6957f:0x7772b19d912adea8!2m2!1d-156.4807926!2d20.8937653!3e0?entry=ttu",
            drivingTime: "10 minutes",
            fee: "yes",
            proTip: "",
            goodForKeiki: false,
				active: true
        }
        ]
    },
    scenic: {
        title: "Scenic Drives",
        activities: [
            {
                name: "Road to Hana",
                description: "A very curvy journey over one-way bridges that rewards you with amazing scenery. I prefer to take the road to Hana as a loop rather than an out-and-back. My preferred direction is counter-clockwise and I start the drive by going throuhg Kula early in the morning; a stop at Grandma's for coffee and pastries; Stop at Kipahulu (Haleakala National Park) for the 7 sacred pools and bamboo forest hike; Don't miss Keanae Peninsula; Stop to see turtles at Ho'okipa; and many more stops along the way that I missed. Many people purchase the GyPSy app that recommends stops along the way.",
                directions: "https://www.google.com/maps/dir/20.8780224,-156.5105448/Keokea,+HI/Kaupo,+HI/Hana,+HI+96713/Ho'okipa+Beach+Park,+Hana+Highway,+Paia,+HI/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/@20.7737779,-156.413026,11z/data=!3m1!4b1!4m34!4m33!1m1!4e1!1m5!1m1!1s0x7954c58b1f979ef1:0x3f464eeeadaa4def!2m2!1d-156.360036!2d20.708319!1m5!1m1!1s0x7954ba30cdccfdb5:0xcfee263a13947dc3!2m2!1d-156.122216!2d20.6364727!1m5!1m1!1s0x7954ac25622d34d3:0xfa34511da051c993!2m2!1d-155.9879885!2d20.7557169!1m5!1m1!1s0x7eab330ae74efe51:0xd69131776ff145f!2m2!1d-156.356079!2d20.9342545!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!3e0?entry=ttu",
                drivingTime: "all day with stops",
                fee: "Free for most stops.",
                proTip: "Many people purchase the <a href=\"https://guidealong.com/tour/road-to-hana-maui/\" target=\"_blank\">Maui Audio Driving Tour</a>. Regardless whether you by the app, their page has good considerations for your trip!",
                goodForKeiki: false,
				active: true
            },
            {
                name: "Iao Needle Monument",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false,
				active: true
            },
            {
                name: "West Maui Loop",
                description: "A less popular (than the Road to Hana) but just as cenic route is the West Maui Loop that passes from Wailuku through Lahaina and beyound, eventually returning to Wailuku. This is just as curvy as the Road to Hana and includes one-lane passages. The attractions are different (i.e., no waterfalls) but the views are spectacular. <a href=\"https://chasingadvntr.com/west-maui-loop-drive/\" target=\"_blank\">West Maui Loop Travel Guide</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Olowalu,+Hawaii+96761/Nakalele+Blowhole,+Wailuku,+HI/20.8780221,-156.51055/@20.9027351,-156.6763005,12z/data=!3m1!4b1!4m22!4m21!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x795529dc3869ca33:0x79367209c206dfd6!2m2!1d-156.6225893!2d20.811411!1m5!1m1!1s0x7eab299218324df7:0xfcac81f56ba48b2d!2m2!1d-156.5885569!2d21.0271397!1m1!4e1!3e0?entry=ttu",
                drivingTime: "Half day with stops",
                fee: "Free",
                proTip: "Lorraine's in Kahakuloa is a good spot for ice cream or banana bread. The only restrooms between Kapalua and Wailuku are at Karen Lei's Gallery at Kahakuloa. No options for lunch between Kapalua and Wailuku.",
                goodForKeiki: false,
				active: true
            },
            {
                name: "Waiʻānapanapa State Park",
                description: "Remote, wild, volcanic coastline offering solitude and respite from urban life. This is the location of the Black Sand Beach people talk about. Lodging, camping, picnicking, shore fishing and hardy family hiking along an ancient Hawaiian coastal trail which leads to Hana. Excellent opportunity to view a seabird colony and natural stone arch. Other features include native hala forest, heiau (religious temple), sea stacks, blow holes and small black sand beach. Entry reservations required. <a href=\"https://dlnr.hawaii.gov/dsp/parks/maui/waianapanapa-state-park/\">DLNR Site</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/20.786334,-156.00292/@20.8599574,-156.257003,10z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m0?entry=ttu",
                drivingTime: "",
                fee: "$$",
                proTip: "Make reservations months in advance of your visit.",
                goodForKeiki: true,
				active: true
            }
        ]
    },
    adventure: {
        title: "Adventures",
        activities: [
            {
                name: "Maui Adventure Park",
                description: "Park comprises both low-rope courses and high-rope courses, plus family-friendly ziplines and plenty else to make unforgettable memories with your loved ones. The Park is perfect for all adventurers ages 7+, so your whole family can get your hearts racing and test your climbing skills. At our Maui Adventure Park, there’s truly something for everyone at every fitness level, enough to help you push your limits and conquer your fears. So come join us today to take to the air, and enjoy Maui from a bird’s-eye view!<a href=\"https://myadventurepark.com/location/maui-hi/?utm_source=hmg&utm_medium=cpc&utm_campaign=adventure-park-ppc-2023&utm_content=adventure-2023&gclid=CjwKCAjwzo2mBhAUEiwAf7wjkgCPu1YBvRwmbRS5S0j7o9WZkuSsIC6VXdxD92zWcYV3bDKbR0Ov8xoCLnQQAvD_BwE\ target=\"_blank\">Maui Adventure Park </a>",
                directions: "google.com/maps/dir/20.878022,-156.5105431/The+Adventure+Park+on+Maui,+78+Ulupono+St,+Lahaina,+HI+96761/@20.8321143,-156.6729477,44814m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x7eaad5647f24687b:0xbb19d85071b1013b!2m2!1d-156.675888!2d20.8848896!3e0?entry=ttu",
                drivingTime: "40 minutes.",
                fee: "$$$",
                proTip: "",
                goodForKeiki: true,
				active: false
            },
            {
                name: "Surf Lessons at Cove Park",
                description: "",
                directions: "https://www.google.com/maps/dir/20.878022,-156.5105431/Maui+Waveriders,+South+Kihei+Road,+Kihei,+HI/@20.803911,-156.5590291,44823m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x7954c534e44dfaa3:0xca80bcae7889fa69!2m2!1d-156.4508224!2d20.7294677!3e0?entry=ttu",
                drivingTime: "30 minutes",
                fee: "$$",
                proTip: "",
                goodForKeiki: true,
				active: true
            },           
            
        ]
    },
    indoorActivities: {
        title: "Indoor Activities",
        activities: [
            {
                name: "Ultimate Air Trampoline Park",
                description: "One of the coolest new additions to Maui’s many family-friendly activities, Ultimate Air Trampoline Park is a 25,000-square-foot indoor activity park in Wailuku with plenty of appeal for guests of all ages. <a href=\"https://www.yelp.com/biz/ultimate-air-trampoline-park-wailuku\" target=\"_blank\">Yelp Review</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Ultimate+Air+Maui,+Laa+Street,+Kahului,+HI,+USA/@20.8744246,-156.5094764,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d30aa4f48c57:0x184ac37fb8814f7e!2m2!1d-156.4975738!2d20.86833!3e0?entry=ttu",
                drivingTime: "5 minutes",
                fee: "$",
                proTip: "Wednesday afternoon is an Ohana special with a good discount for a per hour charge.",
                goodForKeiki: true,
				active: true
            }
            
        ]
    },
    snorkeling: {
        title: "Snorkeling",
        activities: [
            {
                name: "Keawekapu (Mauna Kai) Beach",
                description: "Long strech of sand starting at Mauna Kai and extending to the Andaz. Evening breezes and incredible sunsets make this beach an incredible way to end a busy day on Maui.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Mana+Kai+Maui+Resort,+South+Kihei+Road,+Kihei,+HI,+USA/@20.7914424,-156.5554971,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954dabf3dc239bf:0x5b479ecc952c1567!2m2!1d-156.4464646!2d20.7048703!3e0?entry=ttu",
                drivingTime: "35 minutes",
                fee: "Free",
                proTip: "The point near the Mauna Kai has the best snorkeling reef.",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Kanahena Cove",
                description: ". Parking is at the ‘Āhihi-Kīna‘U Natural Area Reserve parking lot past Kanahena Cove. You can park here and walk back up the main road going north and enjoy some amazing snorkeling. It’s a little over a quarter mile walk!",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Kanahena+Cove,+Makena+Rd,+Kihei,+HI+96753,+United+States/@20.749282,-156.5532334,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954dcb0ca887c2f:0x570aca7584adb1f!2m2!1d-156.437518!2d20.618084!3e0?entry=ttu",
                drivingTime: "45 minutes",
                fee: "Free",
                proTip: ".",
                goodForKeiki: true,
				active: true
            },
            {
                name: "Ulua Beach",
                description: "Considered by many to be one of the best snorkeling beaches.",
                directions: "https://www.google.com/maps/dir/20.878022,-156.5105431/Ulua+Beach,+Wailea-Makena,+HI/@20.7854114,-156.5539903,42794m/data=!3m2!1e3!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x7954dadb40ecc1cb:0xee0b53d7dd663171!2m2!1d-156.4436167!2d20.6903433!3e0?entry=ttu",
                drivingTime: "35 minutes",
                fee: "Free",
                proTip: "The point along the North section of beach has the best snorkeling reef.",
                goodForKeiki: true,
				active: true
            }   
            
        ]       
    }


}