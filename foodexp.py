import streamlit as st
import pandas as pd
import datetime

# Initialize session state for products
if 'products' not in st.session_state:
    st.session_state['products'] = pd.DataFrame(columns=['Product', 'Quantity', 'Expiry Date'])

# Set background image using a raw string or escaped backslashes
st.markdown(
    r"""
    <style>
    body {
        background-image: url('C:/Users/ACER/Byte-me/bdg.jpg'); /* Use forward slashes or raw string */
        background-size: cover;
        background-repeat: no-repeat;
        color: #333; /* Default text color */
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Title of the app
st.title("Food Expiry Tracking")

# Fun facts about food items
fun_facts = [
    "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
    "Apples float in water because they are 25% air!",
    "Bananas are berries, but strawberries aren't!"
]
st.subheader("Fun Facts About Food")
for fact in fun_facts:
    st.write(fact)

# Input form for adding products
st.subheader("Add Expiring Ingredients")
product_name = st.text_input("Ingredient Name")
quantity = st.number_input("Quantity", min_value=1, value=1)
expiry_date = st.date_input("Expiry Date", min_value=datetime.date.today())

if st.button("Add Ingredient"):
    new_product = {'Product': product_name, 'Quantity': quantity, 'Expiry Date': expiry_date}
    st.session_state['products'] = pd.concat([st.session_state['products'], pd.DataFrame([new_product])], ignore_index=True)
    st.success(f"{product_name} added successfully!")

# Display stored ingredients with days left for expiry
st.subheader("Your Ingredients")

if st.session_state['products'].empty:
    st.info("No ingredients added yet. Start by adding some above!")
else:
    # Ensure 'Expiry Date' is in datetime format
    st.session_state['products']['Expiry Date'] = pd.to_datetime(st.session_state['products']['Expiry Date'], errors='coerce')

    # Check for null values after conversion
    if st.session_state['products']['Expiry Date'].isnull().any():
        st.error("There are invalid dates in your expiry dates. Please check your input.")
    else:
        # Calculate days left for expiry
        today = pd.to_datetime(datetime.date.today())
        st.session_state['products']['Days Left'] = (st.session_state['products']['Expiry Date'] - today).dt.days

        # Highlight products based on expiry status
        def highlight_expiring(s):
            if s['Days Left'] <= 2:
                return ['background-color: red; color: white'] * len(s)
            elif s['Days Left'] <= 4:
                return ['background-color: yellow; color: black'] * len(s)
            else:
                return ['background-color: white; color: black'] * len(s)

        styled_df = st.session_state['products'].style.apply(highlight_expiring, axis=1)
        st.write(styled_df)

# Button styles
button_style = """
<style>
.stButton > button {
    background-color: #ffcc00; /* Yellow */
    color: black;
}
</style>
"""
st.markdown(button_style, unsafe_allow_html=True)
