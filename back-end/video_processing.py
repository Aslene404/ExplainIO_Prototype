
from moviepy.editor import VideoFileClip, VideoClip, CompositeVideoClip



def crop_video(video_path):
    # Load the video clip
    video_clip = VideoFileClip(video_path)

    # Define the dimensions for cropping
    top_crop = 40  # Pixels to crop from the top
    bottom_crop = 40  # Pixels to crop from the bottom
    left_crop = 90  # Pixels to crop from the left
    right_crop = 90  # Pixels to crop from the right

    # Calculate new dimensions
    new_width = video_clip.w - left_crop - right_crop
    new_height = video_clip.h - top_crop - bottom_crop

    # Crop the video
    video_clip = video_clip.crop(x1=left_crop, y1=top_crop, x2=left_crop + new_width, y2=top_crop + new_height)

    # Save the output video
    output_path="output/output_video.mp4"
    video_clip.write_videofile(output_path)




