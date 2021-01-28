from pydantic import BaseModel

class PostJob(BaseModel):
    organisation : str = None
    designation : str = None
    basesalary : str = None
    location : str = None
    workhours : str = None
    contactNo : str = None