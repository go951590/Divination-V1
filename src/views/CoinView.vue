<template>
  <div class="coin-container">
    <div id="coin" @click="flipCoin" :class="{ heads: isHead, tails: !isHead && count > 0, flipping: isFlipping }">
      <div class="side-a"></div>
      <div class="side-b"></div>
    </div>
    <h1>點擊這個硬幣，算卦一共需點擊六次</h1>
    <div id="result">
      
      <div v-for="(result, index) in record" :key="index" class="result">{{ sign[result] }}</div>
      
      <div v-if="specialResult" class="resultWords">{{ specialResult }}</div>
    </div>
    <div v-if="count >= 6" class="buttonContainer">
      <button @click="reset">重新整理</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sign: {
        1: "_______",
        0: "___  ___",
      },
      count: 0,
      record: [],
      isFlipping: false,
      isHead: false,
      specialResult: null, 
    };
  },
  methods: {
    flipCoin() {
      if (this.isFlipping || this.count >= 6) {
        return;
      }
      this.isFlipping = true;
      this.specialResult = null; 

      setTimeout(() => {
        const flipResult = Math.random() <= 0.5;
        this.record.push(flipResult ? "1" : "0");
        this.isHead = flipResult;
        this.count++;
        this.isFlipping = false;
        
        
        this.checkSpecialResult();
      }, 100);
    },
    reset() {
      this.count = 0;
      this.record = [];
      this.isFlipping = false;
      this.specialResult = null;
    },
    checkSpecialResult() {
      const resultStr = this.record.toString();
      if (resultStr === ["1", "1", "1", "1", "1", "1"].toString()) {
        this.specialResult = "第一卦 乾為天";
      }
      if (resultStr === ["0", "0", "0", "0", "0", "0"].toString()) {
        this.specialResult = "第二卦 坤為地";
      } 
      if (resultStr === ["1", "0", "0", "0", "1", "0"].toString()) {
        this.specialResult = "第三卦 水雷屯";
      }  
      // 在此添加更多條件判斷...
    },
  },
}
</script>



<style scoped>
body {
    padding-top: 50px;
    background: #F7F7F7;
    -webkit-perspective: 800px;
    perspective: 800px;
  }
  h1{
    text-align: center;
  }
  #coin {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  #coin div {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
       -moz-border-radius: 50%;
            border-radius: 50%;
    -webkit-box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
       -moz-box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
            box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
  }
  .side-a {
    background-color: #bb0000;
  }
  .side-b {
    background-color: #3e3e3e;
  }
  
  #coin {
    transition: -webkit-transform 1s ease-in;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  #coin div {
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .side-a {
    z-index: 100;
  }
  .side-b {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  
  }
  
  #coin.heads {
    -webkit-animation: flipHeads 3s ease-out forwards;
    -moz-animation: flipHeads 3s ease-out forwards;
      -o-animation: flipHeads 3s ease-out forwards;
         animation: flipHeads 3s ease-out forwards;
  }
  #coin.tails {
    -webkit-animation: flipTails 3s ease-out forwards;
    -moz-animation: flipTails 3s ease-out forwards;
      -o-animation: flipTails 3s ease-out forwards;
         animation: flipTails 3s ease-out forwards;
  }
  
  .result {
    text-align: center;
    font-size: 50px;
    font-weight: bold;

  }

  .resultWords {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
  }


 


  @-webkit-keyframes flipHeads {
    from { 
        -webkit-transform: rotateY(0); 
        transform: rotateY(0);
    }
    to {
        -webkit-transform: rotateY(1800deg);
        transform: rotateY(1800deg); 
    }
}

@keyframes flipHeads {
    from {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }
    to {
        -webkit-transform: rotateY(1800deg);
        transform: rotateY(1800deg);
    }
}

@-webkit-keyframes flipTails {
    from {
        -webkit-transform: rotateY(0);
        transform: rotateY(0); 
    }
    to {
        -webkit-transform: rotateY(1980deg);
        transform: rotateY(1980deg);
    }
}

@keyframes flipTails {
    from {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }
    to {
        -webkit-transform: rotateY(1980deg);
        transform: rotateY(1980deg);
    }
}

button {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
}

button:hover {
  background: #fff;
  box-shadow: 0px 2px 10px 5px #1abc9c;
  color: #000;
}

button:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

button:focus { outline:0; }


.buttonContainer {
  display: flex;
  justify-content: center;
}
</style>


