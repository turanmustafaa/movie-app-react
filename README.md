# Network Hardwares Frontend Case

Bu proje, iş başvurusu için geliştirilen bir case projesidir. Bu README dosyası, projenin genel yapısı, kullanılan teknolojiler ve projeyi çalıştırma adımlarını içerir.

## Kullanılan Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- React
- React Router DOM
- Axios
- Swiper
- React Loading Skeleton
- TypeScript
- Vite (Bunun üzerine kurulu bazı yardımcı araçlar)
- Tailwind CSS

# Projeyi Nasıl Geliştirdim

Bu proje, TypeScript kullanılarak geliştirilmiştir. Aşağıda projenin geliştirilme sürecinde kullanılan yöntemler ve teknolojiler hakkında detaylı bilgiler bulunmaktadır:

- TypeScript ile projeyi geliştirdim.
- Responsive tasarımı, mobil, tablet ve masaüstü ekranlar için uyumlu hale getirdim.
- Projeyi tekrar olçeklenebilir hale getirdim. Mimari değiştirmeden büyütülebilir ve esnek bir yapıya sahip. Bu amaçla layout sistemi entegre edildi. Farklı modallar, bileşenler vb. esnek bir şekilde entegre edilebilir ve tekrar kullanılabilir.
- Veri alışverişi işlemleri için özel hooklar oluşturuldu.
- Veri alışverişi işlemlerinin akıcılığı için skeleton kullanıldı.
- Tüm bileşenler, Context API'yi güncelliyor ve kullanılan parçalara Context Provider ile veriler aktarılıyor.
- İstekler için Axios kütüphanesi kullanıldı.
- State yönetimi için Context API kullanıldı.
- API anahtarı ve base URL için .env dosyası kuruldu ve kullanıldı.
- Animasyonlar, geçişler ve tüm stil işlemleri Tailwind CSS ile yapıldı.
- Projenin tamamı Tailwind CSS ile yazıldı, Styled Components kullanılmadı. Zaman kazanmak amacıyla bu tercih yapıldı.
- Slider için SwiperJS kütüphanesi kullanıldı.


## Nasıl Çalıştırılır?

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Öncelikle, projeyi klonlayın veya zip olarak indirin:

```bash
git clone <proje-git-url>

npm install

npm run dev
```


# Network Hardwares Frontend Case

This project is a case project developed for a job application. This README file contains the general structure of the project, the technologies used, and the steps to run the project.

## Used Technologies

The following technologies are used in this project:

- React
- React Router DOM
- Axios
- Swiper
- React Loading Skeleton
- TypeScript
- Vite (along with some helper tools)
- Tailwind CSS

## How I Developed the Project

This project is developed using TypeScript. Below are detailed explanations about the methods and technologies used during the development of the project:

- Developed the project using TypeScript.
- Made the design responsive, compatible with mobile, tablet, and desktop screens.
- Made the project scalable again. It can be enlarged without changing the architecture and has a flexible structure. For this purpose, a layout system was integrated. Different modals, components, etc. can be integrated flexibly and reused.
- Created custom hooks for data fetching operations.
- Used skeleton for smoother data fetching operations.
- All components update the Context API, and data is passed to the used parts with Context Provider.
- Axios library was used for requests.
- Context API was used for state management.
- .env file was set up and used for API key and base URL.
- Animations, transitions, and all style operations were done with Tailwind CSS.
- The entire project was written in Tailwind CSS, Styled Components were not used to save time.
- SwiperJS library was used for sliders.

## How to Run

Follow the steps below to run the project on your local machine:

1. First, clone the project or download it as a zip file:

```bash
git clone <project-git-url>

npm install

npm run dev
