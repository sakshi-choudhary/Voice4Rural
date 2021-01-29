from twilio.rest import Client

account_sid = "AC3837dc86ec3c158fba0a73b8e696e309"
auth_token = "4d92ff7b75caf1ac5710b30441410cfb"
v = {
  "name": "SD",
  "members": 2,
  "date": "01-02-21",
  "phone": "9836088355"
}
client = Client(account_sid, auth_token)
client.messages.create(
                to="+919836088355",  #v.phone
                from_="+17206694147",
                body=f"{v.name},\nYour booking for Covid Vaccination has been received for {v.members} on {v.date}-Voice4Rural"
                )
print("Sent")
