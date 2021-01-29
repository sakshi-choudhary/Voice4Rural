import numpy as np
import pandas as pd
import seaborn as sns
from datetime import datetime
from sklearn.preprocessing import MinMaxScaler
from sklearn.tree import DecisionTreeRegressor
import random

#commodity_list = []

from update_commodities import update_list
 
commodity_list=update_list()

annual_rainfall = [29, 21, 37.5, 30.7, 52.6, 150, 299, 251.7, 179.2, 70.5, 39.8, 10.9]

base = {
    "Paddy": 1245.5,
    "Arhar": 3200,
    "Bajra": 1175,
    "Barley": 980,
    "Copra": 5100,
    "Cotton": 3600,
    "Sesamum": 4200,
    "Gram": 2800,
    "Groundnut": 3700,
    "Jowar": 1520,
    "Maize": 1175,
    "Masoor": 2800,
    "Moong": 3500,
    "Niger": 3500,
    "Ragi": 1500,
    "Rape": 2500,
    "Jute": 1675,
    "Safflower": 2500,
    "Soyabean": 2200,
    "Sugarcane": 2250,
    "Sunflower": 3700,
    "Urad": 4300,
    "Wheat": 1350

}



commodity_dict = {
    "arhar": "crop_data/Arhar.csv",
    "bajra": "crop_data/Bajra.csv",
    "barley": "crop_data/Barley.csv",
    "copra": "crop_data/Copra.csv",
    "cotton": "crop_data/Cotton.csv",
    "sesamum": "crop_data/Sesamum.csv",
    "gram": "crop_data/Gram.csv",
    "groundnut": "crop_data/Groundnut.csv",
    "jowar": "crop_data/Jowar.csv",
    "maize": "crop_data/Maize.csv",
    "masoor": "crop_data/Masoor.csv",
    "moong": "crop_data/Moong.csv",
    "niger": "crop_data/Niger.csv",
    "paddy": "crop_data/Paddy.csv",
    "ragi": "crop_data/Ragi.csv",
    "rape": "crop_data/Rape.csv",
    "jute": "crop_data/Jute.csv",
    "safflower": "crop_data/Safflower.csv",
    "soyabean": "crop_data/Soyabean.csv",
    "sugarcane": "crop_data/Sugarcane.csv",
    "sunflower": "crop_data/Sunflower.csv",
    "urad": "crop_data/Urad.csv",
    "wheat": "crop_data/Wheat.csv"
}

def TopFiveCrops():
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]
    prev_month = current_month - 1
    prev_rainfall = annual_rainfall[prev_month - 1]
    current_month_prediction = []
    prev_month_prediction = []
    change = []

    for i in commodity_list:
        current_predict = i.getPredictedValue([float(current_month), current_year, current_rainfall])
        current_month_prediction.append(current_predict)
        prev_predict = i.getPredictedValue([float(prev_month), current_year, prev_rainfall])
        prev_month_prediction.append(prev_predict)
        change.append((((current_predict - prev_predict) * 100 / prev_predict), commodity_list.index(i)))
    sorted_change = change
    sorted_change.sort(reverse=True)
   
    to_send = []
    for j in range(0, 5):
        perc, i = sorted_change[j]
        name = commodity_list[i].getCropName().split('/')[1]
        to_send.append([name, round((current_month_prediction[i] * base[name]) / 100, 2), round(perc, 2)])
 
    return to_send


def BottomFiveCrops():
    current_month = datetime.now().month
    current_year = datetime.now().year
    current_rainfall = annual_rainfall[current_month - 1]
    prev_month = current_month - 1
    prev_rainfall = annual_rainfall[prev_month - 1]
    current_month_prediction = []
    prev_month_prediction = []
    change = []

    for i in commodity_list:
        current_predict = i.getPredictedValue([float(current_month), current_year, current_rainfall])
        current_month_prediction.append(current_predict)
        prev_predict = i.getPredictedValue([float(prev_month), current_year, prev_rainfall])
        prev_month_prediction.append(prev_predict)
        change.append((((current_predict - prev_predict) * 100 / prev_predict), commodity_list.index(i)))
    sorted_change = change
    sorted_change.sort()
    to_send = []
    for j in range(0, 5):
        perc, i = sorted_change[j]
        name = commodity_list[i].getCropName().split('/')[1]
        to_send.append([name, round((current_month_prediction[i] * base[name]) / 100, 2), round(perc, 2)])
   
    return to_send





