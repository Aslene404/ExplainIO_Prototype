import os

import requests
import time

url = "https://api.d-id.com/talks"
api_key = "Y2V5b2pveDMyN0BuaWNrb2xpcy5jb20:F-ICs1GvymYbdOHFWLbCC"
male_voice="de-DE-ConradNeural"
female_voice="de-DE-MajaNeural"
male_image='https://media.istockphoto.com/id/1143500885/vector/man-portrait-with-beard-vector-illustration-of-male-character.jpg?s=612x612&w=0&k=20&c=v9pv64ASjUYTRscfrYXEeof-oI2IfTPwJPuxRWNeG74='
female_image='https://cdn3.vectorstock.com/i/1000x1000/13/87/cartoon-avatar-woman-front-view-vector-9421387.jpg'
textinput="Random Page Patrol ist eine gemeinschaftliche Wikipedia-Patrouille, die sich auf den Prozess der regelmäßigen und häufigen Überprüfung zufällig ausgewählter Seiten durch Special:Random bezieht."
def download_video(id):
    headers = {
        "Authorization": f"Basic {api_key}",  # Use "Bearer" if it's a token-based authentication
        "Content-Type": "application/json"  # Specify the content type as JSON if needed
    }
    while True:
        # Your code to be executed every 5 seconds goes here
        print("This code will run every 5 seconds.")

        # Sleep for 5 seconds
        time.sleep(5)
        response = requests.get(url + '/' + id, headers=headers)
        if response.status_code == 200 or response.status_code == 201:
            print("GET request was successful!")
            print("Response content:")
            print(response.text)
            response_data = response.json()

            # Access specific elements in the response
            status = response_data.get("status")
            print(status)
            if status == "done":
                result_url = response_data.get("result_url")
                print(result_url)
                if not os.path.exists("output"):
                    os.makedirs("output")
                    print(f"Folder 'pdfs' created.")


                # Send an HTTP GET request to the URL
                response = requests.get(result_url)

                # Check if the request was successful (status code 200)
                if response.status_code == 200:
                    # Specify the local file path where you want to save the downloaded file
                    local_video_path = "output/downloaded_video.mp4"

                    # Write the content to the local video file
                    with open(local_video_path, "wb") as file:
                        file.write(response.content)

                    print(f"File downloaded and saved as '{local_video_path}'")
                else:
                    print(f"File download failed with status code {response.status_code}")
                return response.text
            if (status=="error"):
                return response.text
        else:

            print(f"POST request failed with status code {response.status_code}")
            return response.status_code


def call_did_api():
    payload = {
        "source_url": female_image,
        "script": {
            "type": "text",
            "input": textinput,
            "provider": {
                "type": "microsoft",
                "voice_id": female_voice,
                "voice_config": {
                    "style": "Default"
                }
            }
        }
    }
    headers = {
        "Authorization": f"Basic {api_key}",  # Use "Bearer" if it's a token-based authentication
        "Content-Type": "application/json"  # Specify the content type as JSON if needed
    }

    # Send the POST request
    response = requests.post(url, json=payload, headers=headers)

    # Check if the request was successful (status code 200)
    if response.status_code == 200 or response.status_code == 201:
        print("POST request was successful!")
        print("Response content:")
        print(response.text)
        response_data = response.json()

        # Access specific elements in the response
        id = response_data.get("id")
        print(id)
        download_video(id)


        return (response.text)
    else:
        print(f"POST request failed with status code {response.status_code}")
        return (response.text)
