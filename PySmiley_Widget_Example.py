import tkinter as tk
import random

# Jokes for the smiley
jokes = [
    "Why don’t skeletons fight? They don’t have the guts.",
    "I told my computer I needed a break. It said no problem, it’ll go to sleep.",
    "I’m not lazy, I’m on energy-saving mode.",
    "I’m smiling, but it’s all an act. 😉"
]

# Initialize the Tkinter root window
root = tk.Tk()
root.title("Mood Swing Smiley")
root.geometry("200x200")
root.resizable(False, False)
root.attributes("-topmost", True)  # Keep the widget on top of other windows

# Function to display a joke
def tell_joke():
    smiley_label.config(text="😜")  # Change the smiley face
    joke = random.choice(jokes)
    message_label.config(text=joke)

# Function to "get bored"
def get_bored():
    smiley_label.config(text="😐")
    message_label.config(text="Am I just here for decoration?")

# Create the smiley face
smiley_label = tk.Label(root, text="😊", font=("Arial", 50))
smiley_label.pack(pady=20)

# Create the message label for jokes
message_label = tk.Label(root, text="", font=("Arial", 10), wraplength=180, justify="center")
message_label.pack(pady=10)

# Add interactions
smiley_label.bind("<Button-1>", lambda e: tell_joke())  # Click to tell a joke
root.bind("<Motion>", lambda e: smiley_label.config(text="😁"))  # Hover changes expression
root.after(5000, get_bored)  # After 5 seconds of no interaction, it gets bored

# Run the Tkinter main loop
root.mainloop()
