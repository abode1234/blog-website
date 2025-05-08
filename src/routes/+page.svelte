<script>
    const programmingLanguages = [
        { name: "Python", level: "Advanced", icon: "🐍" },
        { name: "JavaScript", level: "Advanced", icon: "📜" },
        { name: "TypeScript", level: "Intermediate", icon: "📘" },
        { name: "Bash", level: "Advanced", icon: "💻" },
        { name: "C/C++", level: "Intermediate", icon: "⚙️" },
        { name: "PHP", level: "Intermediate", icon: "🐘" },
        { name: "SQL", level: "Advanced", icon: "🗄️" },
        { name: "HTML/CSS", level: "Advanced", icon: "🎨" },
        { name: "Go", level: "Intermediate", icon: "🐹" }, // Added Go
    ];

    const frameworks = [
        { name: "Svelte", level: "Intermediate", icon: "✨" },
        { name: "Node.js", level: "Intermediate", icon: "🟢" },
        { name: "Django", level: "Beginner", icon: " D " },
        { name: "React", level: "Beginner", icon: "⚛️" },
    ];

    const aiSkills = [
        { name: "Machine Learning", description: "Core Concept", icon: "🤖" },
        { name: "Natural Language Processing", description: "NLP", icon: "🗣️" },
        {
            name: "TensorFlow",
            description: "Deep Learning Library",
            icon: "🧠",
        },
        { name: "PyTorch", description: "Deep Learning Library", icon: "🔥" },
        { name: "Deep Learning", description: "Advanced ML", icon: "💡" }, // Added Deep Learning
    ];
</script>

<svelte:head>
    <title>Abdul-Almotaleb | Network Engineer & Penetration Tester</title>
    <meta
        name="description"
        content="Personal blog of Abdul-Almotaleb, a network engineer and penetration tester."
    />
</svelte:head>

<section class="mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6">Welcome to My Blog</h1>

    <div
        class="rounded-lg shadow-md p-6 mb-8"
        style="background-color: #2F2A3E;"
    >
        <h2 class="text-2xl font-semibold mb-4 text-white">About Me</h2>
        <p class="text-gray-300 mb-4">
            I'm Abdul-Almotaleb, a passionate network engineer and web
            penetration tester with expertise in cybersecurity. I specialize in
            identifying and mitigating security vulnerabilities in web
            applications and network infrastructures.
        </p>
        <p class="text-gray-300">
            On this blog, I share my knowledge, experiences, and insights about
            network security, penetration testing techniques, and best practices
            for securing web applications. Join me as we explore the fascinating
            world of cybersecurity together!
        </p>
    </div>
</section>

<section>
    <h2 class="text-2xl font-semibold mb-8">My Technical Skills</h2>

    <!-- Programming Languages -->
    <br />

    <div class="mb-10">
        <h3 class="text-xl font-semibold mb-5 text-white">
            Programming Languages
        </h3>
        <br />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each programmingLanguages as skill}
                <div
                    class="rounded-lg shadow-md p-4 flex items-center min-h-[80px]"
                    style="background-color: #3F2A4E;"
                >
                    <span class="text-3xl mr-4 w-8 text-center"
                        >{skill.icon}</span
                    >
                    <div>
                        <h4 class="font-medium text-lg text-white">
                            {skill.name}
                        </h4>
                        {#if skill.level}
                            <p class="text-sm text-gray-600 text-white">
                                {skill.level}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <br />

    <!-- Frameworks & Libraries -->
    <div class="mb-10">
        <h3 class="text-xl font-semibold mb-5 text-white">
            Frameworks & Libraries
        </h3>
        <br />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {#each frameworks as skill}
                <div
                    class="rounded-lg shadow-md p-4 flex items-center min-h-[80px]"
                    style="background-color: #3F2A4E;"
                >
                    <span class="text-3xl mr-4 w-8 text-center"
                        >{skill.icon}</span
                    >
                    <div>
                        <h4 class="font-medium text-lg text-white">
                            {skill.name}
                        </h4>
                        {#if skill.level}
                            <p class="text-sm text-gray-600 text-white">
                                {skill.level}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- AI & Machine Learning -->
    <br />
    <div>
        <h3 class="text-xl font-semibold mb-5 text-white">
            AI & Machine Learning
        </h3>
        <br />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {#each aiSkills as skill}
                <div
                    class="rounded-lg shadow-md p-4 flex items-center min-h-[80px]"
                    style="background-color: #3F2A4E;"
                >
                    <span class="text-3xl mr-4 w-8 text-center"
                        >{skill.icon}</span
                    >
                    <div>
                        <h4 class="font-medium text-lg text-white">
                            {skill.name}
                        </h4>
                        {#if skill.description}
                            <p class="text-sm text-gray-600 text-white">
                                {skill.description}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="mt-8">
        <a
            href="/blog"
            class="btn btn-primary"
            style="background-color: #3D265C;"
        >
            Explore My Blog
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </a>
    </div>
</section>
