from bs4 import BeautifulSoup as BS 
import requests 
  
  
# method to get the price of gold 
def get_price(url): 
      
    # getting the request from url  
    data = requests.get(url) 
  
    # converting the text  
    soup = BS(data.text, 'html.parser') 
  
    # finding metha info for the current price 
    ans = soup.find("div", class_ = "BNeawe s3v9rd AP7Wnd").text 
      
    # returnng the price 
    return ans 
   
# url of the gold price 
url = "https://www.google.com / search?q = gold + price"
  
# calling the get_price method 
ans = get_price(url) 
  
# printing the ans 
print(ans) 