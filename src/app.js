    document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            items: [
                { id: 1, name: 'Kopi Toraja', img: 'produk1.jpg', price: 20000 },
                { id: 2, name: 'Kopi Bali', img: 'produk2.jpg', price: 25000 },
                { id: 3, name: 'Kopi Tubruk', img: 'produk3.jpg', price: 30000 },
                { id: 4, name: 'Kopi Luak', img: 'produk4.jpg', price: 35000 },
              
            ],
          
        }));

        Alpine.store('cart', {
           items: [],
           total: 0,
           quantity: 0,
           add(newItem) {
            // cek apakah ada barang yang sama di cart //
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada/cart kosong //
            if(!cartItem) {
              this.items.push({...newItem, quantity: 1, total: newItem.price });
              this.quantity++;
              this.total += newItem.price;
            } else {
              // jika barang nya sudah ada, cek apakah barang beda atau sama //
              this.items = this.items.map((item) => {
                // jika barang beda //
                if(item.id !== newItem.id) {
                  return item;
                } else {
                  //jika barang sudah ada, tambah quantity dan totalnya //
                  item.quantity++;
                  item.total = item.price * item.quantity;
                  this.quantity++;
                  this.total += item.price;
                  return item;
                }  
              })
            }

           
           },
           remove(id) {
            // ambil item yang mau di remove berdasarkan id nya //
            const cartItem = this.items.find((item) => item.id === id);
            // jika item lebih dari 1 //
            if(cartItem.quantity > 1) {
            // telusuri 1 1 //
            this.items = this.items.map((item) => {
              // jika bukan barang yang diklik //
             if(item.id !== id) {
              return item;
            } else {
              item.quantity--;
              item.total = item.price * item.quantity;
              this.quantity--;
              this.total -= item.price;
              return item;
            }
            })
            } else if (cartItem.quantity === 1) {
              // jika barang sisa 1 //
              this.items = this.items.filter((item) => item. id !== id);
              this.quantity--;
              this.total -= cartItem.price;
            }
           },
          });
        });

    // konversi ke rupiah //
    const rupiah = (number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(number);
    };
        