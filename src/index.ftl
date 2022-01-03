<#macro main>
    <app-root></app-root>
<#macro>
<#maro pagebody>
<% for (key in htmlWebpackPlugin.files.js) { %>
    <% if (htmlWebpackPlugin.files.js[key].entry) { %>
        <script src="<@spring.url '/<%= htmlWebpackPlugin.files.js[key].entry %>" type="text/javascript"></script>

    <% } %>
<% } %>
<#macro>
<@header>
