<template>
  <div class="home">
    <h1>Selamat datang di Pemesanan Lapangan Futsal</h1>
    <p>Silakan pilih waktu dan lokasi untuk pemesanan lapangan futsal.</p>
    <router-link to="/bookings">Buat Pemesanan</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 50px;
}

p {
  text-align: center;
}
</style>
