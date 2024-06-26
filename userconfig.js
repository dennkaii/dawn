const CONFIG = new Config({
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Santo Domingo, Dominican Republic',
    scale: 'C'
  },
 clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    }
  },
  keybindings: {
    "s": 'search-bar'
  },
  disabled: [],
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'chi ll',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'Social Media',
        links: [
          {
            name: "Whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
          },
          {
            name: "Reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: '#64876d'
          },
          {
            name: "Youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
          },
          {
             name: "Twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
          }
        ]
      },
      {
        name: 'Games',
        links: [
        {
            name: "Chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "Monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
        ]
      },
      {
        name: 'Music',
        links: [
          {
            name: 'Tidal',
            url: 'https://listen.tidal.com/',
            icon: 'brand-tidal',
          }
        ]
      }
      ]
    },
      {
      name: 'Dev',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {

          
          name: ' Nix - Related',
          links: [
          {
            name: 'Nix Search',
            url:'https://search.nixos.org/packages',
            
          },
          {
            name: 'Home Manager',
            url: 'https://home-manager-options.extranix.com/'
          },
        ],
        },{
          name: 'subreddits',
          links: [
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
         {
          name: 'misc',
          links: [
           {
             name: 'Zig Wiki',
             url:'https://ziglang.org/documentation/0.12.0/', 
           },
           {
           name: 'Github',
           url: 'https://github.com/',
           icon: 'brand-github'
         }
         ]
        }
      ]
    }]
});
