import numpy as np
import pandas as pd
import seaborn as sns
from datetime import datetime
from sklearn.preprocessing import MinMaxScaler
from sklearn.tree import DecisionTreeRegressor
import random


from commodity import Commodity
from crop_profile import get_crop_profile
from tops_bottoms import TopFiveCrops,BottomFiveCrops
import crops_areas
from forecast_helper import CurrentMonth,TwelveMonthPrevious,SixMonthsForecastHelper,TwelveMonthsForecast


#commodity_list = []
from update_commodities import update_list
 
commodity_list=update_list()



if __name__ == "__main__":

    #Pass the name of crop to get its full profile info in JSON format ; example->bajra
    cropname="bajra"
    print(get_crop_profile(cropname))
    #To get the name and market price of latest top and bottom most 5 crops , call these functions
    print(TopFiveCrops())

    print(BottomFiveCrops())