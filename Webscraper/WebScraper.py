from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup


def myDefinition(term): 
    """
    The function asks users for a word and returns the definition of it by scraping Google 
    and Wikipedia if the definition does not exist on the Google search page. 

    It uses Selenium and BeautifulSoup to parse the html and uses a headless webdriver 
    so that no new tab opens 

    Some limitations: If Google does not provide accurate search respones to 
    "term defintion" then the web scraper will not provide an accurate definition. If 
    there are no clear definitions, the web scraper will do its best to  
    find something that is related to the definition of the term 
    In short: Blame Google

    Precondition: term is the word or phrase to define. It is a string 
    """
    #Searches the word on google 
    url = 'https://www.google.com/search?q={0}'.format(term + ' definition')

    #Makes the webdriver headless and opens the url 
    op = webdriver.ChromeOptions()
    op.add_argument('headless')
    driver = webdriver.Chrome(options=op)
    driver.implicitly_wait(30)
    driver.get(url)

    #Uses BeautifulSoup to parse the html 
    soup =BeautifulSoup(driver.page_source, 'html.parser')

    #Finds all the tags that specify a definition entry on a google search 
    defn = soup.find_all('div', style="display:inline")

    if (len(defn)==0):
        #Finds the highlight box (either middle or side)
        defn= soup.findAll("div", {"data-attrid" :"description"})
        if (len(defn)==0):
            #Alternative way to find highlight box (in the middle)
            defn = soup.findAll("div", {"data-attrid" :"wa:/description"})
            if (len(defn)==0):
                #There is no description anywhere on the page 
                print("There is no definition on this page")

    defSoup = defn[0]
    count = 0
    #if there is a date, delete the date
    for span in defSoup("span"):
        if (count ==2):
            span.decompose()
        count+=1

    defWord = defSoup.text

    #If it is a wikipedia description, delete the Description and Wikipedia for easy reading and add a link 
    if 'Description' in defWord and 'Wikipedia'in defWord:

        defWord = defn[0].text.replace('Description', '').replace('Wikipedia', '') 
        
        #If the description says see more on wikipedia, add the first sentence definition from Wikipedia 
        if '...' in defWord: 
            #Find the wikipedia link 
            bc = defSoup.find("a", href=True )

            #Go to the page 
            driver.get(bc['href'])
            soup2 = BeautifulSoup(driver.page_source, 'html.parser')

            #Find the first p tag- beginning of text 
            wikiSntce = soup2.find("p")
            #Remove superscript tags 
            for sup in wikiSntce("sup"):
                sup.decompose()
            #Find and return the first sentence of the Wikipedia page 
            inPd= wikiSntce.text.index('.')
            defWord= wikiSntce.text[0:(inPd+1)]
    
    #return the definition with the first letter of the first sentence capitalized 
    defWord = defWord[:1].upper() + defWord[1:]
    return(defWord)
