import React from 'react'
import { StyleSheet, View } from 'react-native'
import MuxPlayer from "@mux/mux-player-react";


function RTMPVIEW() {

  var styles = StyleSheet.create({
      player: {
          width: '100%',
      },
  });
  
  return (
    <View>
        <MuxPlayer
          streamType="on-demand"
          playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
          metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
        />
    </View>
  )
}

export default RTMPVIEW