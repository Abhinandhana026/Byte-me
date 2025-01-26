import streamlit as st

# This will display a title on your Streamlit app
st.title("Streamlit Test App")

# This will display some text on your app
st.write("If you can see this, Streamlit is working perfectly!")

# Optional: Add a button to interact with
if st.button('Click Me'):
    st.write("You clicked the button!")
