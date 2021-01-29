import pandas_datareader as web
import numpy as np
import tweepy
from tweepy import OAuthHandler
from tweepy import API
from tweepy import Cursor
from datetime import datetime, date, time, timedelta
#from collections import Counter
import sys
import tweepy as tw
import numpy as np
import pandas as pd
import pandas_datareader as web
import math
from sklearn import preprocessing
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import datetime as dt
import plotly
#import constants as ct
from textblob import TextBlob
from .Tweet import Tweet


num_of_tweets=20
consumer_key="SvrmVjZ527gKMocaCIdS8ArZo"
consumer_secret="mFjrSeMr6TU7qOxQHTrtyPGt2BeA4RnBK4XzIHo1SH4jGebyl2"
access_token="2555973745-UzdXECQl5iom7CLhLVvsSEPZLdPC6kWsVHR3O4o"
access_token_secret="8sJRoJgPTxkqNt5fFe37nOq8fsMSVNABqv9VyTuYCqnrI"


def tweet_to_data_frame(tweets):
    df = pd.DataFrame(data=[tweet.text for tweet in tweets], columns=['Tweets'])
    return df

def get_tweets(handle):
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = API(auth, wait_on_rate_limit=True)

    account = handle
    item = api.user_timeline(id=account,count=50)
    df = tweet_to_data_frame(item)

    all_tweets = []
    for j in range(50):
        all_tweets.append(df.loc[j]['Tweets'])
    return all_tweets

def get_hashtag(hashtag):
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = API(auth, wait_on_rate_limit=True)

    account = hashtag
    all_tweets = []

    twt = tweepy.Cursor(api.search, q=account, lang='en',tweet_mode='extended').items(50)

    for tweet in twt:
        
        status=tweet
        if 'extended_tweet' in status._json: 
            
            status_json = status._json['extended_tweet']['full_text'] 
            #status=tweet
            
        elif 'retweeted_status' in status._json and 'extended_tweet' in status._json['retweeted_status']: 
            status_json = status._json['retweeted_status']['extended_tweet']['full_text'] 
        elif 'retweeted_status' in status._json: 
            status_json = status._json['retweeted_status']['full_text'] 
        else: 
            status_json = status._json['full_text'] 
        #print(status_json)
        all_tweets.append(status_json)
    return all_tweets

# a = get_hashtag("tesla")
# print(a)
# print(type(a))
