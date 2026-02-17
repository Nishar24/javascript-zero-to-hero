// (Ye example hospital / lab system jaisa hai)

// 📖 Kahani

// Doctor bolta hai:

// Report ready → Patient ko notify (resolve)

// Delay → Wait message (reject)

function labReportReady() {
  return new Promise((resolve, reject) => {

    console.log("🧪 Lab test chal raha hai...");

    setTimeout(() => {

      let reportReady = true;

      if (reportReady) {
        resolve("📊 Report ready hai");
      } else {
        reject("⏳ Report me delay hai");
      }

    }, 3000);
  });
}

labReportReady()
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
