<template>
  <div class="home">
    <div class="content">
      <h1>Selamat datang di Pemesanan Lapangan Futsal</h1>
      <p>Temukan lapangan futsal terbaik dan pesan langsung di sini!</p>
      <router-link to="/BookingPage">
        <button class="cta-button">Buat Pemesanan</button>
      </router-link>
      <router-link to="/SignUp">
        <button>login</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Background Image */
.home {
  background-image: url('https://images.unsplash.com/photo-1533871487029-7c9a5eb8feee'); /* Ganti dengan gambar yang diinginkan */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Full screen height */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
}

/* Content Styling */
.content {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
}

/* Heading Styling */
h1 {
  font-size: 3em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

/* Paragraph Styling */
p {
  font-size: 1.2em;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* Button Styling */
.cta-button {
  background-color: #ff7f50;
  color: white;
  padding: 15px 30px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.cta-button:hover {
  background-color: #ff6347;
  transform: scale(1.1);
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }

  .cta-button {
    padding: 12px 25px;
    font-size: 1em;
  }
}
</style>
