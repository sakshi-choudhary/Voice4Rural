import pandas_datareader as web
import numpy as np
from tweepy import OAuthHandler
from tweepy import API
from tweepy import Cursor
from datetime import datetime, date, time, timedelta
from collections import Counter
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
from Tweet import Tweet
import tweepy

num_of_tweets=20


consumer_key="SvrmVjZ527gKMocaCIdS8ArZo"
consumer_secret="mFjrSeMr6TU7qOxQHTrtyPGt2BeA4RnBK4XzIHo1SH4jGebyl2"
access_token="2555973745-UzdXECQl5iom7CLhLVvsSEPZLdPC6kWsVHR3O4o"
access_token_secret="8sJRoJgPTxkqNt5fFe37nOq8fsMSVNABqv9VyTuYCqnrI"

def retrieving_tweets_polarity(symbol):
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    user = tweepy.API(auth)

    tweets = tweepy.Cursor(user.search, q=str(symbol), tweet_mode='extended', lang='en').items(num_of_tweets)

    tweet_list = []
    global_polarity = 0
    for tweet in tweets:
        tw = tweet.full_text
        print("Collected Tweets Are : \n",tw)
        blob = TextBlob(tw)
        polarity = 0
        for sentence in blob.sentences:
            polarity += sentence.sentiment.polarity
            global_polarity += sentence.sentiment.polarity
        tweet_list.append(Tweet(tw, polarity))

    global_polarity = global_polarity / len(tweet_list)
    
    return global_polarity
