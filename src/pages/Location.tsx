function Location() {
  return (
    <>
    <h2 className="text-2xl font-bold mb-4">Lokacija postaje</h2>
    <iframe
      width="100%"
      height="450"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Koritnica%2060&t=&z=11&ie=UTF8&iwloc=&output=embed"
    ></iframe>
    </>
  );
}

export default Location;
