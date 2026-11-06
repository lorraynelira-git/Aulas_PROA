for (let vel = 60; vel <= 100; vel += 10) {
  if (vel <= 80) {
    console.log(vel + " km/h: Velocidade OK");
  } else if (vel > 80 && vel <= 90) {
    console.log(vel + " km/h: Multa leve");
  } else if (vel > 90 || vel === 100) {
    console.log(vel + " km/h: Multa grave!");
  }
}