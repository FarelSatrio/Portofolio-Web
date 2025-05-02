<template>
  <div>
    <h1>Pemesanan Lapangan Futsal</h1>
    <form @submit.prevent="submitBooking">
      <div>
        <label for="date">Tanggal</label>
        <input type="date" id="date" v-model="form.date" required />
      </div>

      <div>
        <label for="time">Waktu</label>
        <input type="time" id="time" v-model="form.time" required />
      </div>

      <div>
        <label for="location_id">Lokasi</label>
        <select v-model="form.location_id" required>
          <option value="1">Lapangan 1</option>
          <option value="2">Lapangan 2</option>
          <option value="3">Lapangan 3</option>
        </select>
      </div>

      <button type="submit">Pesan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BookingPage'  // Ganti menjadi nama multi-kata
};
</script>