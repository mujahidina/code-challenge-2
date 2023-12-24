#introduction
* in this code challenge, am supposed to create an app called Flatacuties where the users vote for some animals.



#core deliverables
* As a user you am supposed to,
 
 1. See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
 

 GET /characters

 Example Response:

   {

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]

.   

2. Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request, or make a new request to this endpoint to get the character's details.

 

GET /characters/:id

Example Response: 

{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

3.  When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.

4. Add a reset button that resets the votes back to 0.

5. Have a form for adding animals.



  #Project set-up

  1. copy the the link from the repository and paste it into your terminal with:  git clone <url>

  2. once you have the files, change directory into that directory and open your code editor; code .

  3. Set up the server: json-server --watch db.json

  


  AUTHOR: Mujahid Abdi.

  mujahidabdi5070@gmail.com

