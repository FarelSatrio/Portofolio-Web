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
  data() {
    return {
      form: {
        date: '',
        time: '',
        location_id: ''
      }
    };
  },
  methods: {
    async submitBooking() {
      alert(`Pesan berhasil!\nTanggal: ${this.form.date}\nWaktu: ${this.form.time}\nLokasi: ${this.form.location_id}`);
    }
  }
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
