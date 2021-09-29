import logo from './logo.svg';
import './App.css';
import Comics from './Comics';

const data_call = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2021 MARVEL",
  "attributionText": "Data provided by Marvel. © 2021 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
  "etag": "2e8df90900a1c81c3627b5e1b1773075857269f2",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 77816,
        "digitalId": 56014,
        "title": "Deadpool (2019) #10",
        "issueNumber": 10,
        "variantDescription": "",
        "description": null,
        "modified": "2020-10-09T09:04:37-0400",
        "isbn": "",
        "upc": "75960609575901011",
        "diamondCode": "NOV200484",
        "ean": "",
        "issn": "2642-9942",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/77816",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/77816/deadpool_2019_10?utm_campaign=apiRef&utm_source=05bdff2e4d6c81bb3025ffd307dd7000"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Deadpool-10/digital-comic/56014?utm_campaign=apiRef&utm_source=05bdff2e4d6c81bb3025ffd307dd7000"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=56014&utm_campaign=apiRef&utm_source=05bdff2e4d6c81bb3025ffd307dd7000"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/56014?utm_campaign=apiRef&utm_source=05bdff2e4d6c81bb3025ffd307dd7000"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/27838",
          "name": "Deadpool (2019 - 2020)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2021-01-27T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2020-12-21T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2021-05-03T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2021-01-27T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 4.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 4.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/f0/6009ea34cb4cf",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/f0/6009ea34cb4cf",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/77816/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13601",
              "name": "Victor Nava",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
              "name": "Vc Joe Sabino",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
              "name": "Gerardo Sandoval",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13449",
              "name": "Chris Sotomayor",
              "role": "colorist (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
              "name": "Jacob Thomas",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12714",
              "name": "Kelly Thompson",
              "role": "writer"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/77816/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
              "name": "Deadpool"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010701",
              "name": "Elsa Bloodstone"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/77816/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/172600",
              "name": "cover from Deadpool (2019) #10",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/172601",
              "name": "story from Deadpool (2019) #10",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/77816/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Comics />
        </p>
      </header>
    </div>
  );
}

export default App;
