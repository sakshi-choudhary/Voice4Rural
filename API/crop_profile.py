from forecast_helper import CurrentMonth,TwelveMonthPrevious,TwelveMonthsForecast
import crops_areas

from update_commodities import update_list
 
commodity_list=update_list()

def get_crop_profile(name):
    #To Get Crop Information in JSON Format
    
    
    max_crop, min_crop, forecast_crop_values = TwelveMonthsForecast(name)
    prev_crop_values = TwelveMonthPrevious(name)
    forecast_x = [i[0] for i in forecast_crop_values]
    forecast_y = [i[1] for i in forecast_crop_values]
    previous_x = [i[0] for i in prev_crop_values]
    previous_y = [i[1] for i in prev_crop_values]
    current_price = CurrentMonth(name)

    crop_data = crops_areas.crop(name)
    context_json = {
        "name":name,
        "max_crop": max_crop,
        "min_crop": min_crop,
        "forecast_values": forecast_crop_values,
        "forecast_x": str(forecast_x),
        "forecast_y":forecast_y,
        "current_price": current_price,
        "prime_loc":crop_data[0],
        "type_c":crop_data[1],
        "export":crop_data[2]
    }
    return context_json