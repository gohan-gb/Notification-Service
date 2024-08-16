1) RUN the command on terminal => npm i 

2) .env(environment variable) configuration =>

a/ create a file named .env inside the backend folder
b/ in that file add these two lines of codes; 
    EMAIL = 'youremail@service.com' (sender's mail/gmail)
    PASSWORD = 'password'(for gmail users, app passwords should be used. To generate an app password ,
                         visit to google account -> security -> app password -> from there a 16digit password can be generated for particular service or app example- 'lklkldcdgdksjdfn' )

4) TO start the server, run the command on terminal => npm run dev                          

3) Check api using thunder client or postman from body =>

{
    "userEmail":"users@email.com"
}