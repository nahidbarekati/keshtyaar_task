export let users = [
    {
        "name": "Leanne Graham",
        "id": 10,
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "Groups":[ 
          {
	          "id": 100,
            "group_name": "Romaguera-Crona",
            "user_id": 10,
            "Posts":[
              {
                "id": 1000,
                "title": "Roma",
                "desc": "Romaguera-Crona",
                "groups_id": 100
              },
              {
                "id": 2000,
                "title": "Roma",
                "desc": "Romaguera-Crona",
                "groups_id": 100
              }
            ]
          },
          {
	      "id": 200,
        "name": "Romaguera-Crona",
        "user_id": 10,
        "Posts":[
          {
          "id": 2000,
          "title": "Roma2000",
          "desc": "Romaguera-Crona",
          "groups_id": 100
          },
          {
          "id": 3000,
          "title": "Roma2000",
          "desc": "Romaguera-Crona",
          "groups_id": 200
          }
        ]
    }
       ]
    },
    {
      "id": 20,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "Groups":[ {
          "id": 300,
          "group_name": "Romaguera-Crona",
          "user_id": 20,
          "Posts":[
                {
                  "id": 4000,
                  "title": "Roma3000",
                  "desc": "Romaguera-Crona",
                  "groups_id": 300
                },
                {
                "id": 5000,
                "title": "Roma4000",
                "desc": "Romaguera-Crona",
                "groups_id": 300
                }
          ]
        }
      ]
    }
]