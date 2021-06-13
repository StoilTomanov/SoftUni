function gramophone(band, album, song) {

    let songDurration = (band.length * album.length) * song.length / 2;
    let rotations = Math.ceil(songDurration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');

// tested in Judge = 100/100;