const info = require('./info')

info((error, audioTrack) => {
  if (error) console.error(error)
  if (!audioTrack) console.error(new Error('Returned audio track is invalid!'))

  console.log(`Probe results for file at URI: ${audioTrack.source.uri}\n\n`)

  console.log('File format...\t', audioTrack.properties.format.format_long_name)
  console.log('File size...\t', audioTrack.properties.format.size, 'bytes')

  console.log('Codec type...\t', audioTrack.properties.stream.codec_type)
  console.log('Channel count...', audioTrack.properties.stream.channels)
  console.log('Duration...\t', audioTrack.properties.stream.duration, 'seconds')
})
