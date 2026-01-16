
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Nguyễn Quang Vinh",
  role: "Intern / Fresher .NET Backend Developer",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // Thay link ảnh của bạn vào đây
  bio: "Tập trung xây dựng các hệ thống Backend hiệu suất cao, ổn định và có khả năng mở rộng với hệ sinh thái .NET.",
  aboutMe: "Chào bạn! Mình là Vinh, một lập trình viên Backend trẻ đầy nhiệt huyết với đam mê xây dựng các giải pháp phần mềm tối ưu. Mình bắt đầu hành trình lập trình của mình với tình yêu dành cho cấu trúc dữ liệu và giải thuật, sau đó dần chuyển hướng sang phát triển hệ thống với .NET Framework và Core.",
  careerGoal: "Mục tiêu ngắn hạn của mình là trở thành một Backend Developer chuyên nghiệp, làm chủ các công nghệ .NET Core, Microservices và các giải pháp đám mây (Cloud Computing).",
  strengths: [
    "Tư duy logic và giải quyết vấn đề tốt.",
    "Khả năng làm việc độc lập và làm việc nhóm hiệu quả.",
    "Sử dụng thành thạo kiến trúc MVC, RESTful API và Entity Framework.",
    "Tối ưu hóa truy vấn Database SQL Server."
  ],
  skills: [
    {
      name: "Backend",
      skills: ["C#", "ASP.NET MVC", "ASP.NET Core", "Entity Framework", "Identity & JWT", "LINQ"]
    },
    {
      name: "Database",
      skills: ["SQL Server", "MySQL", "ERD Design", "Query Optimization", "Stored Procedures"]
    },
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "ReactJS (Basic)"]
    },
    {
      name: "Tools",
      skills: ["Git & GitHub", "Postman", "Visual Studio", "SQL Management Studio", "Docker (Basic)"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Hệ thống thi trắc nghiệm trực tuyến",
      description: "Nền tảng cho phép giáo viên tạo đề và học sinh thi trực tuyến với tính năng tự động chấm điểm.",
      technologies: ["ASP.NET MVC", "SQL Server", "Identity", "JavaScript"],
      features: [
        "Quản lý đề thi theo Area (Admin/User)",
        "Tự động trộn câu hỏi và đáp án",
        "Thống kê điểm số và lịch sử thi",
        "Xử lý concurrency khi nhiều người thi cùng lúc"
      ],
      githubUrl: "https://github.com/vinh-dev/quiz-system"
    },
    {
      id: "2",
      title: "E-Commerce MVC Website",
      description: "Website bán hàng đầy đủ các chức năng từ quản lý sản phẩm đến thanh toán.",
      technologies: ["ASP.NET MVC", "Entity Framework", "Bootstrap", "SQL Server"],
      features: [
        "Giỏ hàng và xử lý đơn hàng",
        "Tìm kiếm và lọc sản phẩm linh hoạt",
        "Trang Admin quản lý kho và khách hàng",
        "Tích hợp SMTP gửi mail xác nhận"
      ],
      githubUrl: "https://github.com/vinh-dev/ecommerce-mvc"
    },
    {
      id: "3",
      title: "RESTful API cho Quản lý Nhân sự",
      description: "API Backend cung cấp dịch vụ cho ứng dụng mobile/web quản lý nhân sự.",
      technologies: [".NET 6 Core", "Web API", "JWT Auth", "PostgreSQL"],
      features: [
        "Xác thực đa tầng với JWT (Access/Refresh Token)",
        "CRUD nhân viên, phòng ban chuyên nghiệp",
        "Ghi log với Serilog",
        "Tài liệu hóa API với Swagger/OpenAPI"
      ],
      githubUrl: "https://github.com/vinh-dev/hr-api-core"
    }
  ],
  contact: {
    email: "quangvinh.dev@gmail.com",
    github: "https://github.com/quangvinh-dev",
    linkedin: "https://linkedin.com/in/quangvinh-dotnet"
  }
};
