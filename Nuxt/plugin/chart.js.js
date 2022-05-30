import Vue from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

Vue.use(ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale)
