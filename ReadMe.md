



/////////===============BOOKY==================/////////////////
https://madmax1776.github.io/

Carousel======================================

The carousel with the picture went pretty smoothly for me. I built it by watching the class lecture we did on the dog carousel and following along with the lecture. I played around with a lot of different sizing for my images (not all of them have the same pixelation) as well as different border colors. I chose the forward and backwards buttons size by what would approximate finger-tip size on the tablet version. The hardest part of the carousel for me was getting the thing to run through all of the pictures without collapsing after the last one. I fixed this problem by increasing the hightestIndex value to 4. I chose the picture in the carousel based on books that I have read and liked and one book that I want to read.

////CSS/Layout=================================================
I set up most of my CSS so that it would pair nicely with my background image. I didn't struggle that much with the CSS except for some of the data types that were two levels down, I spent a lot of time figuring out how to reach those. The only thing I don't like about the css overall is that my background image makes the search results kinda hard to read. Other than that, I really like the way it looks. It's simple and the background image is awesome.

//////////=============Google API===================================
Getting the google APIs to work was by far the most frustrating part of this
project for me. I started out testing all of the API manually through the
web browser/html/javascript file which was pretty time consuming. I was nervous I was going to have to scrap my project theme and do something else besides google books but while surveying google's exhaustive information about their APIs, I found some code that linked to a Harry Potter book. I copied and pasted that into my test file and it actually pulled data. This was late Saturday evening. On Sunday, I registered my API key with them and attempted to use my API key at the end of the url like their instructions suggested to pull the data I was wanting. It wasn't working so  I later found a great API testing tool called postman and used that to ensure my google books
search APIs were working properly. This was huge for me because it enabled me to know that the API was legit and that it was actually my code that was messed up. The information I was getting on google's website was pretty confusing because it was geared to actual apps/companies that are wanting to sell books and other products with their APIs. Therefore, a lot of the information was geared towards getting your API key and registering your app with google. It wasn't until Saturday afternoon that I realized that just to pull information and embed it into your app you don't have to register it with them. The API is public and from what I was reading, the API key and registration is more for financial/business purposes. I'm not 100% sure that my API key is worthless though because the search function on my app only started working when I generated my key and enabled the google books API. I plan on testing to see if that's the case after this project is done/graded but I'm nervous that if I experiment with it now that I'll break my code. I enabled my google books search function by going to the google cloud platform library and searching for the google books API and then enabling that API. I'm still a little confused on that because the API was working in my postman before I registered the API but I'm not going to run the risk of breaking my stuff by deleting my Booky-API-Key off of the google cloud platform. The hardest part overall about working with google apis for a (in experienced web developer terms) "simple project" like this is just finding that basic information that you need to just pull the book info. So much of it is geared towards more complex objectives such as google's book-shelving feature where you can basically save books that you are interested in. Overall, I'm glad I chose to work with google APIs for this project because I think it will help me a lot in the future with designing dynamic products.




Links to resources that helped me with my google books API:
https://developers.google.com/books

https://developers.google.com/books/docs/v1/using

https://developers.google.com/books/docs/viewer/developers_guide

https://developers.google.com/books/docs/v1/reference

https://developers.google.com/fit

https://developers.google.com/fit/rest/v1/get-started

https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/

https://www.youtube.com/watch?v=82hnvUYY6QA&t=3s

https://www.youtube.com/watch?v=fEYx8dQr_cQ

https://www.youtube.com/watch?v=rJesac0_Ftw

https://www.youtube.com/watch?v=mLL5pdIbqWc&t=6s

https://www.youtube.com/watch?v=uI_UP0pgsDE

https://www.youtube.com/watch?v=s_G5CnAu69M

https://www.youtube.com/watch?v=W6NsAO08vmE

https://www.youtube.com/watch?v=sGLEcsRg0IM&t=52s

https://www.youtube.com/watch?v=iM12nF0tBuM

https://developers.google.com/books/docs/viewer/examples

https://cloud.google.com/docs/authentication/api-keys

https://cloud.google.com/

https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

https://www.w3schools.com/xml/ajax_intro.asp

https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp

https://techbeacon.com/app-dev-testing/11-top-open-source-api-testing-tools-what-your-team-needs-know
