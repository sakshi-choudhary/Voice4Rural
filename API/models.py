from pydantic import BaseModel

class PostJob(BaseModel):
    organisation : str = None
    designation : str = None
    basesalary : str = None
    location : str = None
    workhours : str = None
    contactNo : str = None

class Market(BaseModel):
    seller: str= None
    name: str = None
    phone: str = None
    price: str = None
    location: str = None

class Vaccine(BaseModel):
    name: str=None
    members: int=None
    date: str = None
    phone: str = None